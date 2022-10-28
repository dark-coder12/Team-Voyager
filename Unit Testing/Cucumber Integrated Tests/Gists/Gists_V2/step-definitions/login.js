const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

require('dotenv').config(); 

Given('I open GitHubs page', () => {

    const pageObj = client.page.login();

    return pageObj
      .navigate()
      .waitForElementVisible('@login', 1000);
});
  
When('I enter Email', () => {

    const pageObj = client.page.login();

    return pageObj
     
    .setValue("@login", process.env.uName)
});

When('I enter Password', () => {

    const pageObj = client.page.login();

    return pageObj
   
    .setValue("@password", process.env.passcode)
    .click("@loginBtn")
    
});
  
Then('GitHub redirects me to Home', () => {
    const pageObj = client.page.login();

    pageObj
      .pause(2000);
      
      return pageObj;
});