
module.exports = {
    'Demo Test for Google' : function (browser){
        browser.url('https://gitlab.com/burakbinmunir1302/Testing')
        .waitForElementVisible('body')
        .verify.title('Team Voyager / Testing · GitLab')
        .pause(1000)
        .end();

    }
    
};

