module.exports = {

    url: 'https://gist.github.com/',
    
     elements: {
        gistName : {
            selector: "#gists > input"
        },
        
        fileName: {
            selector: "#gists > div.js-gist-file > file-attachment > blob-editor > div.file-header.d-flex.flex-items-center.pr-0 > div.input-group.gist-filename-input > input.form-control.js-gist-filename.js-blob-filename"
        }
        ,
        codeSpace: {
            selector: "#code-editor"
        },

        addGistBtn: {
            selector: "#new_gist > div > div.d-flex.flex-items-center.flex-justify-between > div > button"
        },

        addNewFileBtn: {
            selector: "#new_gist > div > div.d-flex.flex-items-center.flex-justify-between > button"
        },

        fileName2: {
           selector: "#gists > div:nth-child(4) > file-attachment > blob-editor > div.file-header.d-flex.flex-items-center.pr-0 > div.input-group.gist-filename-input > input.form-control.js-gist-filename.js-blob-filename"
        },

        codeSpace2: {
            locateStrategy: 'xpath',
            selector: "/html/body/div[5]/div/main/div[2]/div/form/div/div[1]/div[3]/file-attachment/blob-editor/div[2]/div/div/div[5]/div[1]/div/div/div/div[5]"
        },

        showPrivacyOpts: {

            locateStrategy: 'xpath',
            selector: "/html/body/div[5]/div/main/div[2]/div/form/div/div[2]/div/details"
        },

        publicGist: {

            locateStrategy: 'xpath',
            selector: "/html/body/div[5]/div/main/div[2]/div/form/div/div[2]/div/details/details-menu/label[2]/div/span[1]"
        },

        privateGist: {

            locateStrategy: 'xpath',
            selector: "/html/body/div[5]/div/main/div[2]/div/form/div/div[2]/div/details/details-menu/label[1]/div/span[2]"
        },

        indent: {
            locateStrategy: 'xpath',
            selector: "/html/body/div[5]/div/main/div[2]/div/form/div/div[1]/div[2]/file-attachment/blob-editor/div[1]/div[3]/select[2]"
        },

        two: {
            locateStrategy: 'xpath',
            selector: "/html/body/div[5]/div/main/div[2]/div/form/div/div[1]/div[2]/file-attachment/blob-editor/div[1]/div[3]/select[2]/optgroup/option[1]"
        },

        four: {
            locateStrategy: 'xpath',
            selector: "/html/body/div[5]/div/main/div[2]/div/form/div/div[1]/div[2]/file-attachment/blob-editor/div[1]/div[3]/select[2]/optgroup/option[2]"
        },

        eight: {
            locateStrategy: 'xpath',
            selector: "/html/body/div[5]/div/main/div[2]/div/form/div/div[1]/div[2]/file-attachment/blob-editor/div[1]/div[3]/select[2]/optgroup/option[3]"
        }
     }
 }
 
