const axios = require("axios");
const sharp = require("sharp");
const fs = require("fs").promises;

// URL and parameters (get this from browser)
const otherDocumentsEntityBaseUrl = `https://cfqasmtl.launchpad.cfapps.ca10.hana.ondemand.com/9d0d73e8-ba66-4e66-9a18-1f2767b5a1cc.ptsdig-appRouter-frontend.comvaeesptsdigptsmanagement/~110124141628+0000~/safe-work-permission/`;
// get this from cUrl(bash) in a actual session, otherwise the process will fail.
const headers = {
  authority: "cfqasmtl.launchpad.cfapps.ca10.hana.ondemand.com",
  accept: "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
  "accept-language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
  cookie:
    "JSESSIONID=s%3AhCXp8RCVE6qR0CiHXaxRIYnLdcz7GAhI.PW2YUCdZU%2BlQs%2BZhfmL0qwcAQGuevxDriV2JqWHkUc4; __VCAP_ID__=eb456604-c3f1-43b3-63c4-9e55",
  dnt: "1",
  "if-none-match": 'W/"2a09d-/lk8XDptTJfTKec/nlV/aPjEDHE"',
  referer:
    "https://cfqasmtl.launchpad.cfapps.ca10.hana.ondemand.com/cp.portal/ui5appruntime.html?siteId=78cba5c3-f1bc-4b70-a5a6-229170416c49&subaccountId=2b51f823-ce74-4df5-8bf7-7a4cf61643b3&saasApprouter=true&sap-ui-app-id=com.vaees.ptsdigptsmanagement&scenario=LAUNCHPAD&sap-startup-params=&sap-shell=FLP&sap-touch=0&sap-ui-versionedLibCss=true&sap-plugins=RTAPluginAgent&sap-theme=sap_fiori_3&sap-locale=pt-BR&sap-propagate-async-loading=true&sap-iframe-hint=UI5",
  "sec-ch-ua":
    '"Not_A Brand";v="8", "Chromium";v="120", "Microsoft Edge";v="120"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
  "sec-fetch-dest": "image",
  "sec-fetch-mode": "no-cors",
  "sec-fetch-site": "same-origin",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
};
// variavel global para obter o link para a proxima pagina
let nextLink = "";
// entidade a atualizar
let entity = `OtherDocuments`;

const processBatch = async (batch) => {
  console.log(`Iniciando processamento de ${batch.length} itens...`);
  let isSuccessProcessing = true;
  for (const item of batch) {
    try {
      const { id, content } = item;

      // valida se tem conteúdo
      if (!content) {
        console.log(`Item ${id} não possui conteúdo.`);
        continue;
      }
      console.log(`Item ${id} possui conteúdo válido.`);

      // se sim, converte o binario para base64
      let stringBase64 = formatBase64URLToBase64(content);
      // verifica o tipo do arquivo
      let typeImage = getImageType(stringBase64);
      console.log(`Item ${id} é do tipo ${typeImage}.`);

      // Verificar se o conteúdo é uma imagem. Se sim, continuamos o processamento
      if (typeImage != "Unknown") {
        console.log(`Item ${id} é uma imagem, continuando processamento...`);
        // Salvar o conteúdo em um arquivo temporário
        console.log(`Item ${id} sendo salvo em um arquivo temporário...`);
        const tempImagePath = `temp/${id}.jpg`;
        await fs.writeFile(tempImagePath, Buffer.from(content, "base64"));
        console.log(
          `Item ${id} salvo com sucesso na pasta temporária ${tempImagePath}`
        );

        console.log(`Item ${id} sendo processado...`);
        // Converter para JPG (caso seja um png) e recomprimir a imagem
        await sharp(tempImagePath)
          .jpeg({ quality: 50 })
          .toFile(`compressed/${id}.jpg`);

        console.log(`Item ${id} processado com sucesso.`);

        // Ler a imagem recomprimida
        console.log(`Preparando item ${id} para envio...`);
        const recompressedContent = await fs.readFile(
          `compressed/${id}.jpg`,
          "base64"
        );

        // Atualizar o registro na origem
        console.log(`Item ${id} sendo atualizado na origem...`);
        await axios
          .patch(
            `${otherDocumentsEntityBaseUrl}/${entity}/${id}`,
            { id, content: recompressedContent },
            { headers }
          )
          .then(() => {
            console.log(`Item ${id} atualizado com sucesso.`);
          })
          .catch((error) => {
            console.error(`Erro ao atualizar item: ${error.message}`);
          });
      } else {
        continue;
      }

      console.log(
        `Item ${id} processado com sucesso! Inciando processamento do próximo item`
      );
    } catch (error) {
      isSuccessProcessing = false;
      console.error(`Erro ao processar item: ${error.message}`);
      break;
    }
  }
  return isSuccessProcessing;
};

const formatBase64URLToBase64 = (base64Url) => {
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4 !== 0) {
    base64 += "=";
  }
  return base64;
};

const convertBase64ToBase64Url = async (base64) => {
  let base64Url = base64.replace(/\+/g, "-").replace(/\//g, "_");
  base64Url = base64Url.replace(/=+$/, "");
  return base64Url;
};

const getImageType = (base64) => {
  if (base64.startsWith("/9j/")) {
    return "data:image/jpeg;base64,";
  } else if (base64.startsWith("iVBORw0KGgo")) {
    return "data:image/png;base64,";
  } else if (
    base64.startsWith("R0lGOD") ||
    base64.startsWith("data:image/gif;base64,47bGR")
  ) {
    return "data:image/gif;base64,";
  } else if (base64.startsWith("UklGR")) {
    return "data:image/webp;base64,";
  } else if (base64.startsWith("Qk3")) {
    return "data:image/bmp;base64,";
  } else if (base64.startsWith("AAABAAE")) {
    return "data:image/x-icon;base64,";
  } else {
    return "Unknown";
  }
};

const processAllPages = async () => {
  let baseUrl = otherDocumentsEntityBaseUrl;
  let url = "";

  do {
    try {
      console.log(`Obtendo lote...`);
      if (!nextLink) {
        url = `${baseUrl}${entity}`;
      } else {
        url = `${baseUrl}${nextLink}`;
      }
      const response = await axios.get(`${url}`, { headers });

      console.log(`Lote obtido. Processando...`);
      const batch = response.data.value;

      console.log(`Iniciando processamento das imagens do lote...`);
      const processedBatch = await processBatch(batch);

      if (!processedBatch) {
        break;
      }

      // Obter o link para a próxima página, se existir
      nextLink = response.data["@odata.nextLink"];
      console.log(`Link para a página seguinte: ${nextLink}`);
    } catch (error) {
      console.error(`Erro ao obter lote: ${error.message}`);
      break;
    }
  } while (nextLink);

  console.log(`Processamento concluído.`);
};

// Iniciar o processo
processAllPages();
