module.exports = {

    url: 'https://github.com/Voyager-Software-Testing',
    
     elements: {
         login : {

             selector: "#login_field"
         },
         
         password : {
             
             selector: "#password"
         },

         loginBtn: {
            selector : "#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button"
        },    

        peopleOptionBtn: {
            selector: "/html/body/div[5]/main/div/header/div[2]/nav/div/ul/li[6]/a",
            locateStrategy: "xpath"
        },

        pendingInvitationBtn: {
            selector: "/html/body/div[5]/main/div/div[2]/div/div[1]/nav/form/a[4]",
            locateStrategy: "xpath"
        },

        selectInvitationBtn: {
            selector: "/html/body/div[5]/main/div/div[2]/div/div[2]/div/div/div[2]/ul/li/div[6]/details/summary",
            locateStrategy: "xpath"
        },

        cancelInvitationBtn: {

            selector: "/html/body/div[5]/main/div/div[2]/div/div[2]/div/div/div[2]/ul/li/div[6]/details/details-menu/details/summary",
            locateStrategy: "xpath"
        },

        confirmCancellation: {

            selector: "/html/body/div[5]/main/div/div[2]/div/div[2]/div/div/div[2]/ul/li/div[6]/details/details-menu/details/details-dialog/div[3]/form/button",
            locateStrategy: "xpath"
        },

        cancelCancellation: {

            selector: "/html/body/div[5]/main/div/div[2]/div/div[2]/div/div/div[2]/ul/li/div[6]/details/details-menu/details/details-dialog/div[1]/button",
            locateStrategy : "xpath"
        }
     }
 }
 