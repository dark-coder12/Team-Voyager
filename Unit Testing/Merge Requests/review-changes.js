// module.exports = {
//     'Reviewing changes' : (browser) => {
//         browser
        
//         .url('https://www.github.com')  // going to GitHubs website
//             .windowMaximize()
//             .waitForElementVisible('a[class="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0"]')
//             .click('a[class="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0"]')
//             .setValue('input[id="login_field"]', 'l201302@lhr.nu.edu.pk') //   input email
//             .setValue('input[id="password"]', 'highschoolprince')        // input password
//             .click('input[value="Sign in"]')   

//             .url('https://github.com/shehryarmunir/Testing-Pull-Requests')
//             .useXpath().click('//*[@id="pull-requests-tab"]') // opening pull request tab
//             .useXpath().click('//*[@id="issue_4_link"]') // opening recent pull request
//             .useXpath().click('//*[@id="repo-content-turbo-frame"]/div/div[2]/div[2]/nav/a[4]') // comparing changes

//             .useXpath().click('//*[@id="review-changes-modal"]/summary')
//             .useXpath().setValue('//*[@id="pull_request_review_body"]', 'Seems Perfect just add an endl')
//             .useXpath().click('//*[@id="review-changes-modal"]/div/div/div/form/div[3]/label/input')
//             .useXpath().click('//*[@id="review-changes-modal"]/div/div/div/form/div[4]/button')

//             .pause(1000)

            
//             .url('https://github.com/shehryarmunir/Testing-Pull-Requests')
//             .useXpath().click('//*[@id="pull-requests-tab"]') // opening pull request tab
//             .useXpath().click('//*[@id="issue_4_link"]') // opening recent pull request
//             .useXpath().click('//*[@id="repo-content-turbo-frame"]/div/div[2]/div[2]/nav/a[2]')

//             .useXpath().click('//*[@id="commits_bucket"]/div/div/div/div[2]/ol/li/div[1]/p/a')

//             .useXpath().click('//*[@id="review-changes-modal"]/summary')
//             .useXpath().setValue('//*[@id="pull_request_review_body"]', 'Approved')
//             .useXpath().click('//*[@id="review-changes-modal"]/div/div/div/form/div[2]/label/input')
//             .useXpath().click('//*[@id="review-changes-modal"]/div/div/div/form/div[4]/button')

//             .useXpath().setValue('//*[@id="new_comment_field"]', 'Leaving Comment')
//             .useXpath().click('//*[@id="partial-new-comment-form-actions"]/div/div[2]/button')

//             .pause(3000)
//             .end()
//     }
// }