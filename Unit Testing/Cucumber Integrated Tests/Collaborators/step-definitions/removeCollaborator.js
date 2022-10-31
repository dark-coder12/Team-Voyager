const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

require('dotenv').config(); 

const pageObj = client.page.removeCollaborator();


Given('I am Logged In', () => {
    
    const browser = client.page.login()
    .navigate()
    .setValue("@login", process.env.uName)
    .setValue("@password", process.env.passcode)
    .click("@loginBtn")
    return browser;
});

When('I open GitHubs Setting Page', () => {

    return pageObj
      .navigate()
      .waitForElementVisible('@collab', 1000);
});

When('I click on Collaborators Section', () => {

    return pageObj
      .click('@collab');
});

When('I click on Add People Button', () => {

    return pageObj
      .click('@addPeople');
});



// Then('GitHub redirects me to Btn2', () => {

//     return pageObj
//       .pause(5000)
//       .waitForElementVisible("@Btn8")
//       .click("@Btn8")
// });

// When('I set value of Btn3', () => {

//     return pageObj
//       .waitForElementVisible("@Btn3")
//       .setValue('@Btn3', process.env.passcode)
// });

// When('I click on Btn4', () => {

//     return pageObj
//       .waitForElementVisible("@Btn4")
//       .click('@Btn4');
// });

// When('I wait for Btn5', () => {

//     return pageObj
//       .waitForElementVisible("@Btn5")
// });

// When('I click on Btn6', () => {

//     return pageObj
//       .waitForElementVisible("@Btn6")
//       .click('@Btn6');
// });


// When('I click on Btn7', () => {

//     return pageObj
//       .waitForElementVisible("@Btn7")
//       .click('@Btn7');
// });


 
