module.exports = {
    url : 'https://github.com/login',

    elements : {
        login : {
            selector: "#login_field"
        },

        password : {
            selector: "#password"
        },

        repo_searchBar: {
            selector : '//*[@id="dashboard-repos-filter-left"]',
            locateStrategy : 'xpath'
        },

          
        searchRepository : {
            selector : '/html/body/div[5]/div/aside/div/loading-context/div/div[1]/div/ul[2]/li[17]/div/div/a',
            locateStrategy : 'xpath'
        },

        file : {
            selector : '//*[@id="repo-content-pjax-container"]/div/div/div[3]/div[1]/div[3]/div[3]/div[1]/div[2]/div[2]/span/a',
            locateStrategy : 'xpath'
        },
        
        editButton : {
            selector : '//*[@id="repo-content-turbo-frame"]/div/div/div[4]/div[1]/div[2]/div[2]/div[1]/form/button',
            locateStrategy : 'xpath'
        },

        codeEditor : {
            selector : '//*[@id="code-editor"]/div/pre',
            locateStrategy : 'xpath'
        },

        commitNameField : {
            selector : '//*[@id="commit-summary-input"]',
            locateStrategy : 'xpath'
        },

        commitOptionalMessageField : {
            selector : '//*[@id="commit-description-textarea"]',
            locateStrategy : 'xpath'
        },

        branchName : {
            selector : '//*[@id="new_blob"]/div/div[7]/div/div[3]/div[2]/label/div/div/input[1]',
            locateStrategy : 'xpath'
        },

        purposeChangeButton: {
            selector : '//*[@id="submit-file"]',
            locateStrategy : 'xpath'
        },

        newBranchRadioButton :{
            selector : '//*[@id="new_blob"]/div/div[7]/div/div[3]/div[2]/label/input',
            locateStrategy : 'xpath'
        },

        createPullRequestButton : {
            selector : '//*[@id="new_pull_request"]/div/div[1]/div/div[2]/div/div[2]/div/button/span',
            locateStrategy : 'xpath'
        }
    }   


}
