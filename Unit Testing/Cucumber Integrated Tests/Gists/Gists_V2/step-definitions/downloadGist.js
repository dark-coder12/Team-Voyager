const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

require('dotenv').config(); 

const pageObj = client.page.downloadGist();

Given('I am Logged in', () => {

    const browser = client.page.login()
    .navigate()
    .setValue("@login", process.env.uName)
    .setValue("@password", process.env.passcode)
    .click("@loginBtn")
    return browser;
});
  
When('I am on the gist I want to download', () => {

    return pageObj
      .navigate()
      .waitForElementVisible('@downloadBtn', 1000);
});

When('I click on the download icon', () => {

    return pageObj
      .click("@downloadBtn")
});

  
Then('GitHub automatically downloads the gist for me', () => {
  
    pageObj
      .pause(5000)
      return pageObj;
});
