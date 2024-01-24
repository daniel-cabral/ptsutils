const fs = require("fs");
const axios = require("axios");
const path = require("path");

const jsonFolder = "../massBackup/backup/PRD";
const defaultSwpId = "1703617630355"; // deixar em branco para usar a original
const entity = `OtherDocuments`;

const uploadBatch = async (values) => {
  // URL and parameters (get this from browser)
  const otherDocumentsEntityBaseUrl = `https://cfqasmtl.launchpad.cfapps.ca10.hana.ondemand.com/9d0d73e8-ba66-4e66-9a18-1f2767b5a1cc.ptsdig-appRouter-frontend.comvaeesptsdigptsmanagement/~141223173318+0000~/safe-work-permission/`;
  // get this from cUrl(bash) in a actual session, otherwise the process will fail.
  const headers = {
    // aqui uso os headers pegos no navegador via curl
    authority: "cfqasmtl.launchpad.cfapps.ca10.hana.ondemand.com",
    accept: "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "accept-language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    cookie:
      "JSESSIONID=s%3A4Zs2A0wtMklkBg56pqfbxNIQGfJdHlrQ.TnCBVfqOsRX7qynWfok2lMNKh80NOCP6B8d16YbkWr0; __VCAP_ID__=beb9936b-3807-4ad5-5701-0e31",
    dnt: "1",
    "if-none-match": 'W/"199e8-p+cI0nQZtcqcxr6uJJ1MxbrEkUM"',
    referer:
      "https://cfqasmtl.launchpad.cfapps.ca10.hana.ondemand.com/cp.portal/ui5appruntime.html?siteId=78cba5c3-f1bc-4b70-a5a6-229170416c49&subaccountId=2b51f823-ce74-4df5-8bf7-7a4cf61643b3&saasApprouter=true&sap-ui-app-id=com.vaees.ptsdigptsmanagement&scenario=LAUNCHPAD&sap-startup-params=&sap-shell=FLP&sap-touch=0&sap-ui-versionedLibCss=true&sap-plugins=RTAPluginAgent&sap-theme=sap_fiori_3&sap-locale=pt-BR&sap-propagate-async-loading=true&sap-iframeint=UI5",
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
  // create a axios sample request with each object of objects variable
  for (const item of values) {
    const body = {
      swp_id: defaultSwpId || item.swp_id,
      description: item.description,
      content: item.content,
    };
    console.log(`enviando arquivo para a PTS ${body.swp_id}...`);
    await axios
      .post(`${otherDocumentsEntityBaseUrl}${entity}`, body, {
        headers: headers, // Aqui é onde os headers devem ser colocados
      })
      .then((response) => {
        console.log(`arquivo enviado para a PTS ${body.swp_id}!`);
        //console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const uploadJsonBatches = async () => {
  const dirName = path.join(__dirname, jsonFolder);
  console.log(`lendo diretorio ${dirName}...`);
  fs.readdir(dirName, async (err, fileList) => {
    if (err) {
      console.error(err);
      return;
    }

    for (let i = 0; i < fileList.length; i++) {
      const filename = fileList[i];
      if (!filename.toLowerCase().endsWith(".json")) continue;

      const fullFilename = path.join(dirName, filename);
      console.log(`lendo o arquivo ${fullFilename}...`);
      const data = fs.readFileSync(fullFilename, "utf8");
      const objects = JSON.parse(data);
      const values = objects.value;
      console.log(`Enviando ${values.length} objetos...`);
      await uploadBatch(values);
    }
  });
};

uploadJsonBatches();
