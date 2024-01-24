// URL and parameters (get this from browser)
const otherDocumentsEntityBaseUrl = `https://cfprdmtl.launchpad.cfapps.ca10.hana.ondemand.com/d276bfdb-527c-4b56-96a2-893c3f1961d5.ptsdig-appRouter-frontend.comvaeesptsdigptsmanagement/~141223202134+0000~/safe-work-permission/`;
// get this from cUrl(bash) in a actual session, otherwise the process will fail.
const headers = {
  authority: "cfprdmtl.launchpad.cfapps.ca10.hana.ondemand.com",
  accept: "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
  "accept-language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
  cookie:
    "JSESSIONID=s%3AG2xdwnW1syoKQr48-hZija94slTycGYC.JtL29ZM7EI3%2B9hip7IHsPT0TmKl7QUg6HQCCcY0%2B410; __VCAP_ID__=beb9936b-3807-4ad5-5701-0e31",
  dnt: "1",
  referer:
    "https://cfprdmtl.launchpad.cfapps.ca10.hana.ondemand.com/cp.portal/ui5appruntime.html?siteId=ce483ce8-f2c2-4247-b5f3-8c5893b01eca&subaccountId=f7a4365a-04d8-4565-be49-e236cf065e53&saasApprouter=true&sap-ui-app-id=com.vaees.ptsdigptsmanagement&scenario=LAUNCHPAD&sap-startup-params=&sap-shell=FLP&sap-touch=0&sap-ui-versionedLibCss=true&sap-plugins=RTAPluginAgent&sap-theme=sap_fiori_3&sap-locale=pt-BR&sap-propagate-async-loading=true&sap-iframe-hint=UI5",
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
