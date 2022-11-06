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

When ('I am currently on my repository', ()=>{
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

Then ('GitHub shows me the changes', ()=> {
    return pageObj
        .click('@fileChangesTab')
        .pause(3000)
})

When ('I press review changes button', ()=>{
    return pageObj
        .click('@reviewDropDown')
        .pause(3000)
})


When ('I leave a {string}', (string)=>{
    return pageObj
        .setValue('@commentBox', string)
        .pause(3000)
})

When ('I press {string} as review option',(string)=>{
    if (string === "requestChanges"){
        return pageObj
            
            .click('@requestChangesRadioButton')
            .pause(3000)
    }
    if (string === "approveButton"){
        return pageObj
            .click('@approveRequestRadioButton')
            .pause(3000)
    }
})

When ('I finish the request changes by submit button', ()=>{
    return pageObj
        .click('@submitReviewButton')
})

Then ('GitHub submit my review',()=>{
    return pageObj
        .pause(3000);
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

When ('I signout from my account',()=>{
    return pageObj
        .click('@profileDropDown')
        .pause(300)
        .click('@signOutButton')
        .pause(3000);
})  

Then ('GitHub signout my account',()=>{
    return pageObj
        .pause(3000);
})
