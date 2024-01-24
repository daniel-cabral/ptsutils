// URL and parameters (get this from browser)
const otherDocumentsEntityBaseUrl = `https://cfdevmtl.launchpad.cfapps.ca10.hana.ondemand.com/9fb764e4-b41b-4872-9228-24b2ffb684d6.ptsdig-appRouter-frontend.comvaeesptsdigptsmanagement/~041223192220+0000~/safe-work-permission/`;
// get this from cUrl(bash) in a actual session, otherwise the process will fail.
const headers = {
  // aqui uso os headers pegos no navegador via curl
  authority: "cfdevmtl.launchpad.cfapps.ca10.hana.ondemand.com",
  accept: "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
  "accept-language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
  cookie:
    "__VCAP_ID__=beb9936b-3807-4ad5-5701-0e31; JSESSIONID=s%3AoAINeXKQuB16tB1wgdqSDfdNKNtKtfQf.5wauCgN2icnD7yiF13AtEi3mTe4uhP9zzGyoYJaw%2FIo",
  dnt: "1",
  "if-none-match": 'W/"12df3-pKWKQL9LKWOLxEtdnvWHkCg1450"',
  referer:
    "https://cfdevmtl.launchpad.cfapps.ca10.hana.ondemand.com/cp.portal/ui5appruntime.html?siteId=78cba5c3-f1bc-4b70-a5a6-229170416c49&subaccountId=9945ee61-1f0d-445a-a005-b9cc78b05d60&saasApprouter=true&sap-ui-app-id=com.vaees.ptsdigptsmanagement&scenario=LAUNCHPAD&sap-startup-params=&sap-shell=FLP&sap-touch=0&sap-ui-versionedLibCss=true&sap-plugins=RTAPluginAgent&sap-theme=sap_fiori_3&sap-locale=pt-BR&sap-propagate-async-loading=true&sap-iframe-hint=UI5",
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
