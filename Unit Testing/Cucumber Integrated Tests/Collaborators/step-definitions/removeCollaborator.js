const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

require('dotenv').config(); 

const pageObj = client.page.removeCollaborator();


Given('I am Logged in', () => {
    
    const browser = client.page.login()
    return browser;
});

When('I open my existing organization', () => {

    return pageObj
      .navigate()
      .maximizeWindow()
      .waitForElementVisible('@peopleOptionBtn', 1000);
});

When('I click on People Option', () => {

    return pageObj
      .click('@peopleOptionBtn')
});

When('I click on Pending Invitations', () => {

  return pageObj
      .waitForElementVisible('@pendingInvitationBtn')
      .click("@pendingInvitationBtn")
      .pause(10000)
});


When('I select the invitation to be deleted', () => {

    return pageObj
      .waitForElementVisible("@selectInvitationBtn")
      .click('@selectInvitationBtn')
      .pause(5000)
});

When('I click on Cancel Invitation', () => {

    return pageObj
      .waitForElementVisible("@cancelInvitationBtn")
      .click('@cancelInvitationBtn')
      .pause(5000)
});

When('I confirm {string}', (string) => {

      return pageObj
        .waitForElementVisible(string)
        .click(string)
});


Then('GitHub redirects me to the updated list', () => {

    return pageObj
      .pause(5000)
});
