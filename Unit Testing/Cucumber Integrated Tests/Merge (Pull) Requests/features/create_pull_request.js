const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

require('dotenv').config(); 

const pageObj = client.page.create_pull_request();

Given ('I am logged into GitHub', ()=> {
    return pageObj
    .navigate()
    .maximizeWindow()
    .waitForElementVisible('@login', 1000)
    .setValue("@login", process.env.email2)
    .setValue("@password", process.env.password2)
    .click("#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button")
    .pause(1000);
})

When ('I open the desried repository', ()=>{
    return pageObj
        .navigate('https://github.com/shehryarmunir/Testing-Pull-Requests')
        .pause(3000);
})


When ('I open file', ()=> {
    return pageObj
        .click("@file")
        .pause(5000);
})

When ('I select edit button', ()=>{
    return pageObj 
        .click("@editButton")
        .pause(5000)
})

When ('I made {string} as changes to file', (string)=>{
    return pageObj
        .clearValue("@codeEditor")
        .setValue("@codeEditor", string)
        .pause(500);
})

When ('I enter {string} as new commit name', (string)=>{
    return pageObj
        .setValue("@commitNameField", string)
        .pause(5000)
})

When ('I enter {string} as optional message',(string)=>{
    return pageObj
        .setValue("@commitOptionalMessageField",string)
        .pause(5000)
})

When ('I select commit in separate branch',()=>{
    return pageObj
        .click("@newBranchRadioButton")
})

When ('I enter {string} as separate branch name',(string)=>{
    return pageObj
        .setValue("@branchName", string)
        .pause(5000)
} )

When ('I press purpose changes button', ()=>{
    return pageObj
        .click("@purposeChangeButton")
        .pause(5000)
})

When('I press create pull request button',()=>{
    return pageObj
        .click("@createPullRequestButton")
})


