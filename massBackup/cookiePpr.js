// URL and parameters (get this from browser)
const otherDocumentsEntityBaseUrl = `https://cfpprmtl.launchpad.cfapps.ca10.hana.ondemand.com/8b1d3f4a-8be9-4dc7-bae5-d3f8c2f1be5a.ptsdig-appRouter-frontend.comvaeesptsdigptsmanagement/~141223174109+0000~/safe-work-permission/`;
// get this from cUrl(bash) in a actual session, otherwise the process will fail.
const headers = {
  authority: "cfpprmtl.launchpad.cfapps.ca10.hana.ondemand.com",
  accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "accept-language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
  cookie:
    "JSESSIONID=s%3ALXybf8hLsoVd8GG9TKiGdMIxgG6Jl6W_.aj8S8H98YbXL%2BZucOhGILdwo6nnXY9fVYXJoNgkDYqA; __VCAP_ID__=68866ba9-ded5-4a5c-7382-c481",
  dnt: "1",
  referer:
    "https://cfpprmtl.launchpad.cfapps.ca10.hana.ondemand.com/cp.portal/ui5appruntime.html?siteId=78cba5c3-f1bc-4b70-a5a6-229170416c49&subaccountId=4a851ac1-d0ea-418a-8773-5145ef6effc6&saasApprouter=true&sap-ui-app-id=com.vaees.ptsdigptsmanagement&scenario=LAUNCHPAD&sap-startup-params=&sap-shell=FLP&sap-touch=0&sap-ui-versionedLibCss=true&sap-plugins=RTAPluginAgent&sap-theme=sap_fiori_3&sap-locale=pt-BR&sap-propagate-async-loading=true&sap-iframe-hint=UI5",
  "sec-ch-ua":
    '"Not_A Brand";v="8", "Chromium";v="120", "Microsoft Edge";v="120"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
  "sec-fetch-dest": "iframe",
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "same-origin",
  "sec-fetch-user": "?1",
  "upgrade-insecure-requests": "1",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
};
