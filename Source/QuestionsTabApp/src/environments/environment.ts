export const environment = {
    production: false,
    apiBaseUrl: "https://thazinqna.azurewebsites.net/api/Request/",
    selfUrl: "https://thazinqna-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "aa81ea33-cf73-444b-b305-006b188a8fb4",
        clientId: "383fb702-c98c-482b-bb9c-4ee1270b6379",
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
