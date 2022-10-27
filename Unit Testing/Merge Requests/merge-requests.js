
module.exports = {
   
   

    'Test for merging a new pull request' :  (browser)=>{
        browser.url('https://github.com') // go to website
        .windowMaximize()
        .waitForElementVisible('a[class="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0"]')
        .click('a[class="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0"]')
        .setValue('input[id="login_field"]', process.env.userName_) // input email
        .setValue('input[id="password"]', process.env.password_)       // input password
        .click('input[value="Sign in"]')    // pressing button for signin

        .useXpath().setValue('//*[@id="dashboard-repos-filter-left"]', 'Inspect-Repository') // searching for repository with name 'Inspect Repository'
        .useXpath().click('/html/body/div[5]/div/aside/div/loading-context/div/div[1]/div/ul[2]/li[15]/div/div/a') // found repository being clicked 

        .useXpath().click('//*[@id="pull-requests-tab"]') // moving to the tab containing pull requests
        .useXpath().setValue('//*[@id="js-issues-search"]','Create main2.cpp') // searching for pull request with name 'Create main2.cpp' 
        .useXpath().click('//*[@id="js-issues-toolbar"]/div[1]/input') // checking the openned pull requests
        .useXpath().click('//*[@id="issue_2_link"]')    // opening 'Create main2.cpp' pull request

        .useXpath().click('//*[@id="repo-content-turbo-frame"]/div/div[2]/div[2]/nav/a[2]') // moving to 'Commits' tab
        .useXpath().click('//*[@id="commits_bucket"]/div/div/div/div[2]/ol/li/div[1]/p/a') // opening pull reuqest  name 'Create main2.cpp'
        .pause(1000)

        /// CASE : User reviews the pull request
        .useXpath().click('//*[@id="review-changes-modal"]/summary') // clicking 'Review changes' button
        .useXpath().setValue('//*[@id="pull_request_review_body"]', 'This is perfect') // typing the comment 
        .useXpath().click('//*[@id="review-changes-modal"]/div/div/div/form/div[1]')    // checking the comment option
        .useXpath().click('//*[@id="review-changes-modal"]/div/div/div/form/div[4]/button') // submitting the review
        

        .pause(60000)
        .end();

    }


};
