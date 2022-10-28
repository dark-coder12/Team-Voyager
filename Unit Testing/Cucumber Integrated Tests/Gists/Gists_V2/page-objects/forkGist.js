module.exports = {

    url: 'https://gist.github.com/discover',
    
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

        exploreGist : {
            locateStrategy : "xpath",
            selector: "/html/body/div[5]/div/main/div[2]/div/div[1]/div[1]/div/div[2]/span[1]/a[1]"
        },
        
        userBtn: {
            selector: "#gist-pjax-container > div > div > div.col-9.col-md-9.col-12 > div:nth-child(2) > div.gist-snippet-meta.d-flex.flex-lg-row.flex-column.width-full > div > div.d-inline-block.px-lg-2.px-0 > span:nth-child(1) > a:nth-child(2)"
        }
        ,
        forkBtn: {
            selector: "#gist-pjax-container > div.gisthead.pagehead.pb-0.pt-3.mb-4 > div > div.mb-3.d-flex.px-3.px-md-3.px-lg-5 > ul > li:nth-child(3) > form > button"
        },
     }
 }
 