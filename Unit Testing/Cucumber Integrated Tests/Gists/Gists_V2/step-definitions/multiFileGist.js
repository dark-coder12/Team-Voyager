const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

require('dotenv').config(); 

const pageObj = client.page.addGist();

Given('I am logged in to my Account', () => {

    const browser = client.page.login();
    return browser;
});
  
Given('I am on a specific chosen Gists page', () => {

    return pageObj
      .navigate()
      .waitForElementVisible('@gistName', 1000);
});

When('I enter the {string} of the Gist to be created', (string) => {

    return pageObj
     
    .setValue("@gistName", string)
});

When('I add the name {string} of the File to be created', (string) => {

    return pageObj
   
    .setValue("@fileName", string)
    .click("@addGistBtn")
    
});

When('I add some content {string} within the File', (string) => {

    return pageObj
   
    .setValue("@codeSpace", string)
    
});
  
When('I click on Add New File to submit another File', () => {

    return pageObj
   
    .click("@addNewFileBtn")
    
});

Then('GitHub displays new fields of input', () => {

    return pageObj
   
    .waitForElementVisible("@fileName2")
    .waitForElementVisible('@codeSpace2');
    
});


When('I add the name {string} of the second File', (string) => {

    return pageObj
   
    .setValue("@fileName2", string)
    
});

When('I add the content {string} of the second File', (string) => {

    return pageObj
   
    .setValue("@codeSpace2", string)
    
});


When('I press request for the privacy options of the Gist', () => {

    return pageObj
    
    .click("@showPrivacyOpts")
        
});

Then('GitHub displays the options available', () => {
  
    return pageObj

    .waitForElementVisible("@publicGist")
    .waitForElementVisible("@privateGist")
   
});

When('I set the privacy {string} for the Gist', (string) => {

    return pageObj
       
    .click(string)    
});


When('I set the indent {string} of the Gist', (string) => {

    return pageObj
    
    .click("@indent")
    .waitForElementVisible(string)
    .click(string)    
});

When('I finally click on the Create New Gist Button', () => {

    return pageObj
   
    .click("@addGistBtn")
    
});
  

Then('GitHub redirects me to the Result', () => {
  
    pageObj
    
    .pause(5000);

    return pageObj;
});



