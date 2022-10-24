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
//         browser.url('https://gist.github.com/')
//         .waitForElementVisible("#gists > input")
//         .setValue("#gists > input", "Testing Gists")
//         .setValue("#gists > div.js-gist-file > file-attachment > blob-editor > div.file-header.d-flex.flex-items-center.pr-0 > div.input-group.gist-filename-input > input.form-control.js-gist-filename.js-blob-filename", "Gist Name")
//         .click("#new_gist > div > div.d-flex.flex-items-center.flex-justify-between > div > button")
//         .keys(browser.Keys.ENTER)
//         .pause(60000)
//         .end();

//     }
// };