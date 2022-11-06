module.exports = {
    url : 'https://github.com/login',

    elements : {
        login : {
            selector: "#login_field"
        },

        password : {
            selector: "#password"
        },

        repositoryNameField: {
            selector : '//*[@id="dashboard-repos-filter-left"]',
            locateStrategy: 'xpath'
        },

        repository : {
            selector :'/html/body/div[5]/div/aside/div/loading-context/div/div[1]/div/ul/li/div/div/a',
            locateStrategy : 'xpath'
        },

        pullRequestTab : {
            selector : '//*[@id="pull-requests-tab"]',
            locateStrategy : 'xpath'
        },

        pullRequest : {
            selector : '//*[@id="issue_9_link"]',
            locateStrategy : 'xpath'
        },

        fileChangesTab : {
            
            selector : '//*[@id="repo-content-turbo-frame"]/div/div[2]/div[2]/nav/a[4]',
            locateStrategy : 'xpath'
        },

        reviewDropDown : {
            selector : '//*[@id="review-changes-modal"]/summary',
            locateStrategy: 'xpath'
        },

        commentBox : {
            selector: '//*[@id="pull_request_review_body"]',
            locateStrategy : 'xpath'
        },

        requestChangesRadioButton : {
           selector:  '//*[@id="review-changes-modal"]/div/div/div/form/div[3]/label/input',
           locateStrategy : 'xpath'
        },
        
        submitReviewButton: {
            selector: '//*[@id="review-changes-modal"]/div/div/div/form/div[4]/button',
            locateStrategy: 'xpath'
        },

        approveRequestRadioButton : {
            selector: '//*[@id="review-changes-modal"]/div/div/div/form/div[2]/label/input',
            locateStrategy: 'xpath'
        },
        
        conversationCommentBox : {
            selector: '//*[@id="new_comment_field"]',
            locateStrategy: 'xpath'
        },

        commentButton : {
            selector: '//*[@id="partial-new-comment-form-actions"]/div/div[2]/button',
            locateStrategy: 'xpath'
        },

        profileDropDown: {
            selector: '/html/body/div[1]/header/div[7]/details/summary/span[2]',
            locateStrategy: 'xpath'
        },
        signOutButton: {
            selector: '/html/body/div[1]/header/div[7]/details/details-menu/form/button',
            locateStrategy: 'xpath'
        }

    }
}
