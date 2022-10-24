// module.exports = {

//     before: function(browser) {
//         browser.url('https://github.com/login')
//         .windowMaximize()
//         .waitForElementVisible("#login_field")
//         .setValue("#login_field", "")
//         .setValue("#password", "")
//         .click("#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button")
//         .keys(browser.Keys.ENTER)
//       },
//     Keys : {
//         ENTER :'\ue007'
//     },
//     'Demo Test for Google' : function (browser){
//         browser.url('https://gist.github.com/discover')
//         .click('xpath' , "/html/body/div[5]/div/main/div[2]/div/div[1]/div[1]/div/div[2]/span[1]/a[1]")
//         .waitForElementVisible("#gist-pjax-container > div > div > div.col-9.col-md-9.col-12 > div:nth-child(2) > div.gist-snippet-meta.d-flex.flex-lg-row.flex-column.width-full > div > div.d-inline-block.px-lg-2.px-0 > span:nth-child(1) > a:nth-child(2)")
//         .click("#gist-pjax-container > div > div > div.col-9.col-md-9.col-12 > div:nth-child(2) > div.gist-snippet-meta.d-flex.flex-lg-row.flex-column.width-full > div > div.d-inline-block.px-lg-2.px-0 > span:nth-child(1) > a:nth-child(2)")
//         .waitForElementVisible("#gist-pjax-container > div.gisthead.pagehead.pb-0.pt-3.mb-4 > div > div.mb-3.d-flex.px-3.px-md-3.px-lg-5 > ul > li:nth-child(3) > form > button")
//         .click("#gist-pjax-container > div.gisthead.pagehead.pb-0.pt-3.mb-4 > div > div.mb-3.d-flex.px-3.px-md-3.px-lg-5 > ul > li:nth-child(3) > form > button")
//         .keys(browser.Keys.ENTER)
//         .pause(60000)
//         .end();

//     }
// };