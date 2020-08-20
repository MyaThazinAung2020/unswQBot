export const environment = {
    production: false,
    apiBaseUrl: "https://unswqbot.azurewebsites.net/api/Request/",
    selfUrl: "https://unswqbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "aa81ea33-cf73-444b-b305-006b188a8fb4",
        clientId: "63694c22-8440-47cc-8ba5-a7f150791daa",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
