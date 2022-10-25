// module.exports = {

//     'Creating new pull request' : (browser) => {
//         browser
//         .url('https://www.github.com')  // going to GitHubs website
//         .windowMaximize()
//         .waitForElementVisible('a[class="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0"]')
//         .click('a[class="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0"]')
//         .setValue('input[id="login_field"]', 'irisali113@gmail.com') //   input email
//         .setValue('input[id="password"]', 'highschoolprince')        // input password
//         .click('input[value="Sign in"]')   

//         .useXpath().setValue('//*[@id="dashboard-repos-filter-left"]', 'Testing-Merge-Requests')//   searching for repository with name 'Inspect Repository'
//         .useXpath().click('/html/body/div[5]/div/aside/div/loading-context/div/div[1]/div/ul/li/div/div/a')//   

//        .useXpath().click('//*[@id="repo-content-pjax-container"]/div/div/div[3]/div[1]/div[3]/div[3]/div[1]/div[2]/div[2]/span/a') // opening file
        
        
//        .useXpath().click('//*[@id="repo-content-pjax-container"]/div/div/div[3]/div[1]/div[2]/details')
//        .useXpath().click('//*[@id="repo-content-pjax-container"]/div/div/div[3]/div[1]/div[2]/details/div/ul/li[3]/form/button')
        

//        .useXpath().setValue('//*[@id="repo-content-pjax-container"]/div/div/form[2]/div/div[1]/span/input', 'main2.cpp')
//        .useXpath().setValue('//*[@id="code-editor"]/div/pre', '#include<iostream>\nusing namespace std;\nint main () {\n\tcout<<"Testing pull request";\n}')
       
//        .useXpath().setValue('//*[@id="commit-summary-input"]', 'Created a pull request ')
//        .useXpath().setValue('//*[@id="commit-description-textarea"]','Created a pull request in test branch')
//        .useXpath().click('//*[@id="repo-content-pjax-container"]/div/div/form[2]/div/div[7]/div/div[3]/div[2]/label/input')
//        .useXpath().setValue('//*[@id="repo-content-pjax-container"]/div/div/form[2]/div/div[7]/div/div[3]/div[2]/label/div/div/input[1]','Testing branch')
//        .useXpath().click('//*[@id="submit-file"]')

//        .useXpath().setValue('//*[@id="pull_request_title"]', 'Created a new pull request')
//        .useXpath().setValue('//*[@id="pull_request_body"]', 'Hey I am prposing a new change in "cout" statement. I think it is relative to the testing scenario. Let me know about your issues')
//        .useXpath().click('//*[@id="new_pull_request"]/div/div[1]/div/div[2]/div/div[2]/div/button')
//         .end();
//     }
// }