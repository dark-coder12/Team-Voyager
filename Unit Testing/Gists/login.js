
module.exports = {

   
    'Demo Test for Google' : function (browser){

         browser.url('https://github.com/login')
        .windowMaximize()
        .waitForElementVisible("#login_field")
        .setValue("#login_field", process.env.userName_)
        .setValue("#password", process.env.password_)
        .click("#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button")
        .keys(browser.Keys.ENTER)
        .pause(160000)
        .end();

    }
};
