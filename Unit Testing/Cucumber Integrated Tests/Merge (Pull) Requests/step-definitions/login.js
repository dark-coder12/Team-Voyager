const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

require('dotenv').config(); 

const pageObj = client.page.login();

Given('I open GitHubs page', () => {

    return pageObj
      .navigate()
      .waitForElementVisible('@login', 1000);
});
  
When('I enter Email', () => {

    return pageObj
    .setValue("@login", process.env.email)
});

When('I enter Password', () => {
    
    return pageObj   
    .setValue("@password", process.env.password)
    .click("#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button")
    
});
  
Then('GitHub redirects me to Home', () => {

    pageObj
      .pause(2000);
      return pageObj;
});