
// const { client } = require('nightwatch-api');
// const { Given, Then, When } = require('cucumber');

// require('dotenv').config(); 

// const pageObj = client.page.addGist();

// Given('I am Logged in', () => {

//     const browser = client.page.login();
//     return browser;
// });
  
// Given('I am on Gists page', () => {

//     return pageObj
//       .navigate()
//       .waitForElementVisible('@gistName', 1000);
// });

// When('I enter the name of the Gist', () => {

//     return pageObj
     
//     .setValue("@gistName", "Sample Gist")
// });

// When('I add the name of the File', () => {

//     return pageObj
   
//     .setValue("@fileName", "File Name")  
// });

// When('I add the {string} of the File', (string) => {

//     return pageObj
   
//     .setValue("@codeSpace", string)
//     .click("@addGistBtn")
    
// });
  
// Then('GitHub redirects me to the Result', () => {
  
//     pageObj
//       .pause(2000);
      
//       return pageObj;
// });
