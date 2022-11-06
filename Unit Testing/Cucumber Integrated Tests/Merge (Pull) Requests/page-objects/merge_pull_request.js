module.exports = {
url : 'https://github.com/login',

        elements : {
            login : {
                selector: "#login_field"
            },

            password : {
                selector: "#password"
            },

            pullRequestTab : {
                selector: '//*[@id="pull-requests-tab"]',
                locateStrategy: 'xpath'
            },

            pullRequest: {
                selector : '//*[@id="issue_11_link"]',
                locateStrategy : 'xpath'
            },

            mergeOptions: {
                selector : '//*[@id="partial-pull-merging"]/div[1]/div/div/div/div/div[3]/div/div/details/summary',
                locateStrategy : 'xpath'
            },

            mergePullRequestOption :{
                selector : '//*[@id="partial-pull-merging"]/div[1]/div/div/div/div/div[2]/div/div/button[1]',
                locateStrategy : 'xpath'
            },

            closePullRequestButton: {
                selector: '//*[@id="partial-new-comment-form-actions"]/div/div[1]/button/span',
                locateStrategy: 'xpath'
            },

            reopenPullRequestButton : {
                selector: '//*[@id="partial-new-comment-form-actions"]/div/div[1]/button/span',
                locateStrategy: 'xpath'
            
            },

            squashAndMergeOption : {
                selector: '//*[@id="partial-pull-merging"]/div[1]/div/div/div/div/div[3]/div/div/details/details-menu/div/button[2]/div/span[2]',
                locateStrategy: 'xpath'
            },

            squashAndMergeButton : {
                selector: '//*[@id="partial-pull-merging"]/div[1]/div/div/div/div/div[3]/div/div/button[2]',
                locateStrategy: 'xpath'
            },

            mergeMessageField: {
                selector : '//*[@id="merge_message_field"]',
                locateStrategy: 'xpath'
            },

            confirmMergeButton : {
                selector: '//*[@id="partial-pull-merging"]/div[1]/div/form/div/div[2]/div/div[1]/button',
                locateStrategy: 'xpath'
            },

            deleteBranchButton : {
                selector: '//*[@id="partial-pull-merging"]/form/div/div/button',
                locateStrategy : 'xpath'
            }
        }
}
