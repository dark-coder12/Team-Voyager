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

        inviteBtn: {
            
            selector: '/html/body/div[5]/main/div/div/div/div[2]/div/div[4]/div[2]/details/summary',
            locateStrategy : "xpath",
        },

        inviteKey: {
            selector: "/html/body/div[5]/main/div/div/div/div[2]/div/div[4]/div[2]/details/details-dialog/form/div/auto-complete/span/div/input",
            locateStrategy: "xpath"
        },

        resultUser: {
            selector: "#org-invite-complete-results-option-0"
        },

        inviteBtn2: {
            selector: "body > div.application-main > main > div > div > div > div.flex-shrink-0.col-12.col-md-3 > div > div:nth-child(4) > div.mt-3 > details > details-dialog > form > div > div > button"
        },

        memberCheckBox: {
            selector: "/html/body/div[5]/main/div[2]/div[2]/label/input",
            locateStrategy: "xpath"
        },

        ownerCheckBox: {
            selector: "       /html/body/div[5]/main/div[2]/div[3]/label/input",
            locateStrategy: "xpath"
        },

        sendInvitationBtn: {
            selector: "/html/body/div[5]/main/div[2]/form/div/div/button",
            locateStrategy: "xpath"
        }
     }
 }
 