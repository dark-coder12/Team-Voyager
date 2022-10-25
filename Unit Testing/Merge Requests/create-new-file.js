// module.exports = {

//     'Creating a merge request' : (browser) => {

//         browser
//         .url('https://www.github.com')  // going to GitHubs website
//         .windowMaximize()
//         .waitForElementVisible('a[class="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0"]')
//         .click('a[class="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0"]')
//         .setValue('input[id="login_field"]', 'irisali113@gmail.com') //   input email
//         .setValue('input[id="password"]', 'highschoolprince')        // input password
//         .click('input[value="Sign in"]')   
        
//         .useXpath().setValue('//*[@id="dashboard-repos-filter-left"]', 'Testing-Merge-Requests')//   searching for repository with name 'Testing Merge Request Repository'
//         .useXpath().click('/html/body/div[5]/div/aside/div/loading-context/div/div[1]/div/ul/li/div/div/a')//   found repository being clicked 

//         .useXpath().click('//*[@id="repo-content-pjax-container"]/div/git-clone-help/div[1]/p/a[1]')   // creating new file
//         .useXpath().setValue('//*[@id="repo-content-pjax-container"]/div/div/form[2]/div/div[1]/span/input', 'main.cpp')
//         .useXpath().setValue('//*[@id="code-editor"]/div/pre', '#include<iostream>\nusing namespace std;\nint main () {\n\tcout<<"Hello World";\n}')

//         .useXpath().setValue('//*[@id="commit-summary-input"]', 'Created main.cpp')
//         .useXpath().setValue('//*[@id="commit-description-textarea"]', 'This is main.cpp made for testing purposes')

//         .useXpath().click('//*[@id="submit-file"]')
//         .pause(3000)
//         .end()
//     }

// }