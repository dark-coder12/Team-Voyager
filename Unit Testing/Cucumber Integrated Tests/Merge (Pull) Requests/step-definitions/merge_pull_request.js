const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

require('dotenv').config(); 

const pageObj = client.page.merge_pull_request();


Given ('I am on logged into my existing GitHub account',()=>{
    return pageObj
    .navigate()
    .maximizeWindow()
    .waitForElementVisible('@login', 1000)
    .setValue("@login", process.env.email2)
    .pause(5000)
    .setValue("@password", process.env.password2)
    .pause(5000)
    .click("#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button")
    .pause(1000);
})

Given ('I navigate to my desired repository', ()=>{
    return pageObj
        .navigate('https://github.com/shehryarmunir/Testing-Pull-Requests')
        .pause(5000)
})

When ('I navigate to Test Repositorys pull request tab', ()=>{
    return pageObj
        .click('@pullRequestTab')
        .pause(3000)
})

When('I open the my created pull request',()=>{
    return pageObj
        .click('@pullRequest')
        .pause(3000)
})

Then ('GitHub redirects me to my pull request', ()=>{
    return pageObj
        .pause(5000)
})

When ('I press close the pull request button', ()=>{
    return pageObj
        .click('@closePullRequestButton')
        .pause(3000)
})

Then ('GitHub closes my pull request', ()=>{
    return pageObj  
        .pause(10000)
})

When ('I reopen pull request',()=>{
        return pageObj
            .click('@reopenPullRequestButton')
            .pause(10000)
})

When ('I select merge pull request option', ()=>{
    return pageObj
        .click('@mergePullRequestOption')
        .pause(3000)
})

When ('I enter merge commit messgae',()=>{
    return pageObj
        .clearValue('@mergeMessageField')
        .setValue('@mergeMessageField', 'Merging the pull request to main')
        .pause(5000)
})

When ('I press confirm merge button', ()=>{
    return pageObj
        .click('@confirmMergeButton')
        .pause(5000)
})

When ('I press delete branch button',()=>{
    return pageObj
        .click('@deleteBranchButton')
        .pause(5000)
})