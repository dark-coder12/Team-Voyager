module.exports = {
    url : 'https://www.github.com',

    elements : {
        login : {
            selector: "#login_field"
        },

        password : {
            selector: "#password"
        },
        
        repoNameField : {
            selector: '//*[@id="dashboard-repos-filter-left"]',
            locateStrategy: 'xpath'
        
        },
        searchedRepository : {
            selector: 'body > div.application-main > div > aside > div > loading-context > div > div.mb-3.Details.js-repos-container.mt-5 > div > ul > li > div > div > a'
        },

        createFileLink : {
            selector : '//*[@id="repo-content-pjax-container"]/div/git-clone-help/div[1]/p/a[1]',
            locateStrategy : 'xpath'
        },

        newFileName : {
            selector : '//*[@id="repo-content-pjax-container"]/div/div/form[2]/div/div[1]/span/input',
            locateStrategy : 'xpath'
        },

        codeEditor : {
            selector : '//*[@id="code-editor"]/div/pre',
            locateStrategy : 'xpath'
        },

        commitName : {
            selector : '//*[@id="commit-summary-input"]',
            locateStrategy : 'xpath'
        },

        commitOptionalMessage : {
            selector : '//*[@id="commit-description-textarea"]',
            locateStrategy : 'xpath'
        },

        commitButton : {
            selector : '//*[@id="submit-file"]',
            locateStrategy : 'xpath'
        }
        
    }
    
}
