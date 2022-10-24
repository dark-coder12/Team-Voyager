module.exports = {

    before: function(browser) {
        browser.url('https://github.com/login')
        .windowMaximize()
        .waitForElementVisible("#login_field")
        .setValue("#login_field", "bismaashar")
        .setValue("#password", "Home_665")
        .click("#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button")
        .keys(browser.Keys.ENTER)
      },
    Keys : {
        ENTER :'\ue007'
    },

     'Demo Test for Google' : function (browser){
         browser.url('https://github.com/bismaashar/TestRepository/settings/access')
        .windowMaximize()
        .waitForElementVisible("xpath" , "http://html/body/div[5]/div/main/turbo-frame/div/div/div/div[1]/div/ul/li[3]/nav-list/ul/li[2]/ul/li[1]/a/span[2]")
        .click("xpath" , "http://html/body/div[5]/div/main/turbo-frame/div/div/div/div[1]/div/ul/li[3]/nav-list/ul/li[2]/ul/li[1]/a/span[2]")
        .waitForElementVisible("#sudo > div.auth-form-header.p-0 > h1")
        .setValue("#sudo_password", "Home_665")
        .click('#sudo > sudo-credential-options > div:nth-child(4) > form > div > div > button')
        .waitForElementVisible("#add-user-access-dialog > summary")
        .click("#repository-access-table > div.Box.rounded-0.rounded-bottom-2.border-top-0 > div > div:nth-child(1) > div.d-flex.flex-column.flex-grow-0 > details > summary")
        .waitForElementVisible("#repository-access-table > div.Box.rounded-0.rounded-bottom-2.border-top-0 > div > div:nth-child(1) > div.d-flex.flex-column.flex-grow-0 > details > details-dialog > form > div > button") 
        .click("#repository-access-table > div.Box.rounded-0.rounded-bottom-2.border-top-0 > div > div:nth-child(1) > div.d-flex.flex-column.flex-grow-0 > details > details-dialog > form > div > button")
        .keys(browser.Keys.ENTER)
        .pause(60000)
        .end();
        
    }    

};
