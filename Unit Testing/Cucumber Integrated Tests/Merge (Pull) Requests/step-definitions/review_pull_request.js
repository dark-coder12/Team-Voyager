const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

require('dotenv').config(); 

const pageObj = client.page.review_pull_request();

Given ('I am logged into my GitHub account', ()=> {
    return pageObj
    .navigate()
    .maximizeWindow()
    .waitForElementVisible('@login', 1000)
    .setValue("@login", process.env.email)
    .setValue("@password", process.env.password)
    .click("#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button")
    .pause(1000);
})

When ('I navigate to my repository', ()=>{
    return pageObj
        .navigate('https://github.com/shehryarmunir/Testing-Pull-Requests')
        .pause(5000)
})

When ('I open pull requests tab', ()=>{
    return pageObj
        .click('@pullRequestTab')
        .pause(3000)
})

When ('I open the pull request', ()=>{
    return pageObj
        .click("@pullRequest")
        .pause(3000)
})

Then ('I review the changes', ()=> {
    return pageObj
        .click('@fileChangesTab')
        .pause(3000)
})

Then ('I press review changes button', ()=>{
    return pageObj
        .click('@reviewDropDown')
        .pause(3000)
})


Then ('I leave a comment', ()=>{
    return pageObj
        .setValue('@commentBox', 'You need to add one more line')
        .pause(3000)
})

Then ('I press request changes button',()=>{
    return pageObj
        .click('@requestChangesRadioButton')
        .pause(3000)
})

Then ('I finish the request changes by submit button', ()=>{
    return pageObj
        .click('@submitReviewButton')
})


When ('I navigate to pull request tab', ()=>{
    return pageObj
        .click('@pullRequestTab')
        .pause(3000)
})

When ('I see the pull request', ()=>{
    return pageObj
        .click("@pullRequest")
        .pause(3000)
})

Then ('I review the new changes', ()=> {
    return pageObj
        .click('@fileChangesTab')
        .pause(3000)
})

Then ('I press review changes button for approval purpose', ()=>{
    return pageObj
        .click('@reviewDropDown')
        .pause(3000)
})

Then ('I press approve button',()=>{
    return pageObj
        .click('@approveRequestRadioButton')
        .pause(3000)
})

Then ('I finish the approve by submit button', ()=>{
    return pageObj
        .click('@submitReviewButton')
})

When ('I leave a {string} on conversation tab', (string)=>{
    return pageObj
        .setValue('@conversationCommentBox',string )
        .pause(3000)
})

When ('I press comment button', ()=>{
    return pageObj
        .click('@commentButton')
        .pause(5000)
})