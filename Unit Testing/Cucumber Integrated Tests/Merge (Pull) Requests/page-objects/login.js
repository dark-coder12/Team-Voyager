const { LocateStrategy } = require("nightwatch/lib/element");

module.exports = {

    url: 'https://github.com/login',
    
     elements: {
         login : {
             selector: "#login_field"
         },

         password : {
             selector: "#password"
         },
     }
}
 