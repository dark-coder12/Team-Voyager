// const { client } = require('nightwatch-api');
// const { Given, Then, When } = require('cucumber');

// require('dotenv').config(); 

// const pageObj = client.page.forkGist();



// Given('I am Logged in', () => {

//     const browser = client.page.login()
//     .navigate()
//     .setValue("@login", process.env.uName)
//     .setValue("@password", process.env.passcode)
//     .click("@loginBtn")
//     return browser;
// });
  
// When('I am on Explore Gists page', () => {

//     return pageObj
//       .navigate()
//       .waitForElementVisible('@exploreGist', 1000);
// });

// When('I click on a certain User', () => {

//     return pageObj
//       .click("@exploreGist")
// });

  
// Then('GitHub redirects me to the Users Gist page', () => {
  
//     pageObj
//       .waitForElementVisible("@userBtn");
      
//       return pageObj;
// });


// When('I click on the Gist File', () => {

//     return pageObj
//       .click("@userBtn")
// });

// When('I click on Fork Gist Button', () => {

//     return pageObj
//       .waitForElementVisible("@forkBtn")
//       .click("@forkBtn")
// });

  
// Then('GitHub forks the Gist in my account', () => {
  
//     pageObj
//       .pause(2000);
      
//       return pageObj;
// });

