
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
//     .click("@addGistBtn")
    
// });

// When('I add the {string} of the File', (string) => {

//     return pageObj
   
//     .setValue("@codeSpace", string)
    
// });
  
// When('I click on Add New File', () => {

//     return pageObj
   
//     .click("@addNewFileBtn")
    
// });

// When('I add the name of File 2', () => {

//     return pageObj
   
//     .setValue("@fileName2", "File Name 2")
    
// });

// When('I add the {string} of File 2', (string) => {

//     return pageObj
   
//     .setValue("@codeSpace2", string)
//     .click("@addGistBtn")
    
// });
  
// Then('GitHub redirects me to the Result', () => {
  
//     pageObj
//       .pause(2000);
      
//       return pageObj;
// });
