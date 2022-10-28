module.exports = {

    url: 'https://gist.github.com/dark-coder12/06c508dc6890adba0afb3b379da3eca7',
    
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

        downloadBtn: {
            locateStrategy: "xpath",
            selector : "/html/body/div[5]/div/main/div[1]/div/div[3]/div[2]/div[3]/a"
        }
     }
 }
 
