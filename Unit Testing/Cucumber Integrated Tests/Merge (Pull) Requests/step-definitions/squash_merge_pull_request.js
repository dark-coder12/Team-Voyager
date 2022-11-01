const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

require('dotenv').config(); 

const pageObj = client.page.squash_merge_pull_request();

Given ('I am on log my self into my existing GitHub account', ()=>{
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

Given ('I go to my desired repository', ()=>{
    return pageObj
    .navigate('https://github.com/shehryarmunir/Testing-Pull-Requests/pull/7')
    .pause(5000)
})

When ('I navigate to my repositorys pull request tab', ()=>{
    return pageObj
    .click('@pullRequestTab')
    .pause(3000)
})

Given ('I open my created pull request', ()=>{
    return pageObj
        .click('@pullRequest')
        .pause(3000)
})

Then ('GitHub redirects me to pull request',()=>{
    return pageObj
        .pause(5000)
})

When ('I open merging options dropdown',()=>{
    return pageObj
        .click('@mergePullRequestOption')
        .pause(3000)
})

When ('I choose squash and merge option', ()=> {
    return pageObj
        .click('@squashAndMergeOption')
        .pause(5000)
})

When ('I click squash and merge button',()=>{
    return pageObj
        .click('@squashAndMergeButton')
        .pause(5000)
})

When ('I enter merge {string} as messgae',({string})=>{
    return pageObj
        .setValue('@mergeMessageField', string)
        .pause(3000)
})

When ('I click confirm squash and merge button',()=>{
    return pageObj
        .click('@confirmSquashMergeButton')
        .pause(5000)
})

Then ('GitHub squashes commit and merges my pull request',()=>{
    return pageObj
        .pause(5000)
})

When ('I click delete branch button',()=>{
    return pageObj
        .click('@deleteBranchButton')
        .pause(5000)
})


Then ('GitHub deletes the branch',()=>{
    return pageObj
        .pause(5000)
})