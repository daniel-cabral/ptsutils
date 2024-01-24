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
