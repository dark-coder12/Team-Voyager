const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
    
    require('dotenv').config(); 
    
    const pageObj = client.page.deleteGist();
    
    Given('I am Logged in', () => {
    
        const browser = client.page.login()
        .navigate()
        .setValue("@login", process.env.uName)
        .setValue("@password", process.env.passcode)
        .click("@loginBtn")
        return browser;
    });
      
    When('I am on the gist I want to delete', () => {
    
        return pageObj
          .navigate()
          .waitForElementVisible('@deleteBtn', 1000);
    });
    
    When('I click on the delete icon', () => {
    
        return pageObj
          .click("@deleteBtn")
    });

    When('I accept the JavaScript confirmation alert', (browser) => {

        pageObj.pause(2000).acceptAlert();
    });
      
    Then('GitHub automatically deletes the gist for me', () => {
      
        pageObj
          .pause(5000)
          return pageObj;
    });
    
