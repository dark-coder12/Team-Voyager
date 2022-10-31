module.exports = {

    url: 'https://github.com/bismaashar/TestRepository/settings',
    
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
        collab: {
            locateStrategy: "xpath",
            selector: "/html/body/div[5]/div/main/turbo-frame/div/div/div/div[1]/div/ul/li[3]/nav-list/ul/li[2]/ul/li[1]/a/span[2]"
        },
        Btn2: {
            selector: "#sudo > div.auth-form-header.p-0 > h1"
        },
        Btn3: {
           selector: "#sudo_password"
        },
        Btn4: {
            selector: "#sudo > sudo-credential-options > div:nth-child(4) > form > div > div > button"
        },
        Btn5: {
            selector: "#add-user-access-dialog > summary"
        },
        Btn6: {
            selector: "#repository-access-table > div.Box.rounded-0.rounded-bottom-2.border-top-0 > div > div:nth-child(1) > div.d-flex.flex-column.flex-grow-0 > details > summary"
        },
        Btn7: {
            selector: "#repository-access-table > div.Box.rounded-0.rounded-bottom-2.border-top-0 > div > div:nth-child(1) > div.d-flex.flex-column.flex-grow-0 > details > details-dialog > form > div > button"
        },

        addPeople: {
            locateStrategy: "xpath",
            selector: "/html/body/div[5]/div/main/turbo-frame/div/div/div[2]/div/div/div[3]/div[2]/details/summary"
        }
     }
 }
 
