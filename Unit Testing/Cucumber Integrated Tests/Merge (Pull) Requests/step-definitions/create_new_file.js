
const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

require('dotenv').config(); 

const pageObj = client.page.create_new_file();


Given('I am logged in', () => {
    
    return pageObj
        .navigate('https://github.com/login')
        .waitForElementVisible('@login', 1000)
        .setValue("@login", process.env.email)
        .setValue("@password", process.env.password)
        .click("#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button")
        .pause(1000);
});

When('I search {string}', (string)=>{
    return pageObj
        .setValue('@repoNameField', string)
        .pause(3000)
})

When('I select searched repository', ()=>{
    return pageObj.click('@searchedRepository').pause(1000)
})


When ('I select create file', ()=> {
    return pageObj
        .click("@createFileLink")
        .pause(3000);
})

When ('I type {string}', (string) => { // string = file name
    return pageObj
        .setValue("@newFileName", string)
        .pause(10000);
})

When ('I type {string} in code editor', (string)=>{
    return pageObj
        .setValue("@codeEditor", string)
})

When ('I enter {string} as commit name', (string)=>{
    return pageObj
        .setValue("@commitName", string);

})

When ('I enter {string} as commit optional message', (string)=>{
    return pageObj
        .setValue("@commitOptionalMessage", string)
})

When ('I press create commit button', ()=>{
    return pageObj
        .click("@commitButton");
})

Then ('GitHub creates the commit', ()=> {
    return pageObj
        .pause(10000);
})
