  module.exports = {
      'Closing pull request without merging changes': (browser) => {

          browser
              .url('https://www.github.com')
              .windowMaximize()
              .waitForElementVisible('a[class="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0"]')
              .click('a[class="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0"]')
              .setValue('input[id="login_field"]', 'irisali113@gmail.com') //    input email
              .setValue('input[id="password"]', 'highschoolprince')      //    input password
              .click('input[value="Sign in"]')   


              .useXpath().setValue('//*[@id="dashboard-repos-filter-left"]', 'Testing-Merge-Requests')    //searching for repository with name 'Inspect Repository'
              .useXpath().click('/html/body/div[5]/div/aside/div/loading-context/div/div[1]/div/ul/li/div/div/a')    //found repository being clicked 

              .useXpath().click('//*[@id="pull-requests-tab"]')
              .useXpath().click('//*[@id="issue_4_link"]')

              .useXpath().click('//*[@id="partial-pull-merging"]/div[1]/div/div/div/div/div[3]/div/div/details')
              .useXpath().click('//*[@id="partial-pull-merging"]/div[1]/div/div/div/div/div[3]/div/div/details/details-menu/div/button[2]/div/span[1]')

              .useXpath().setValue('//*[@id="new_comment_field"]', 'Considered everything and reflected in\nThank You closing merege request with squash and commit option')
              .useXpath().click('//*[@id="partial-new-comment-form-actions"]/div/div[1]/button')

              .pause(10000)
              .waitForElementVisible('//*[@id="partial-new-comment-form-actions"]/div/div[1]/button/span')
              .useXpath().click('//*[@id="partial-new-comment-form-actions"]/div/div[1]/button/span')

              .useXpath().click('//*[@id="partial-pull-merging"]/div[1]/div/div/div/div/div[3]/div/div/button[1]')
              .useXpath().setValue('//*[@id="new_comment_field"]', 'Considered everything and reflected in\nThank You closing merege request')
              .useXpath().click('//*[@id="partial-new-comment-form-actions"]/div/div[1]/button')

              .pause(30000)
              .end()


      }
  };