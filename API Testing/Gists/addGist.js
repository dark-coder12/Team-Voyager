Feature("Gists");

var assert = require("assert");

require('dotenv').config()

Scenario("Testing Creation of a New Gist using Post Request", ({ I }) => {

     var descriptionOfGist = "Hello World Program";

     var fileOne = "README.md";
     var fileTwo = "HelloWorld.cpp";

     var fileOneContent =
          "The following code is written in C++, and it prints Hello World on the console";
     var fileTwoContent =
          "#include <iostream> \n using namespace std; \n int main() { \n cout << 'Hello World' \n return 0 \n }";

     var fileOneSize = fileOneContent.length;
     var fileTwoSize = fileTwoContent.length;

     var urlOfAddedGist;
     var visibility = true;

     var correctVisibility = false;
     var correctDescription = false;

     var correctFileOne = false;
     var correctFileTwo = false;

     var correctFileOneSize = false;
     var correctFileTwoSize = false;

     I.amBearerAuthenticated(
          secret(process.env.key)
     );

     I.sendPostRequest("https://api.github.com/gists", {
      
          description: descriptionOfGist,

          public: visibility,

          files: {

               "README.md": {
                    content: fileOneContent,
               },
               "HelloWorld.cpp": {
                    content: fileTwoContent,
               },
          },

     }).then((value) => {

          urlOfAddedGist = value.data.url;

          console.log("Gist URL = ", urlOfAddedGist);
          console.log("Description = ", value.data.description);
          console.log("File 1 = ", value.data.files[fileOne].filename);
          console.log("File 2 = ", value.data.files[fileTwo].filename);

          I.sendGetRequest(
               "https://api.github.com/users/dark-coder12/gists"
          )
          .then((value) => {

               for (gistIndex in value.data) {

                    if (urlOfAddedGist == value.data[gistIndex].url) {
                         correctVisibility = true;

                         if (
                              descriptionOfGist ==
                              value.data[gistIndex].description
                         ) {
                              correctDescription = true;
                         }
                         if (
                              fileOne ==
                              value.data[gistIndex].files[fileOne].filename
                         ) {
                              correctFileOne = true;
                         }
                         if (
                              fileTwo ==
                              value.data[gistIndex].files[fileTwo].filename
                         ) {
                              correctFileTwo = true;
                         }
                         if (
                              fileOneSize ==
                              value.data[gistIndex].files[fileOne].size
                         ) {
                              correctFileOneSize = true;
                         }
                         if (
                              fileTwoSize ==
                              value.data[gistIndex].files[fileTwo].size
                         ) {
                              correctFileTwoSize = true;
                         }
                    }
               }

               try {
                    assert(
                         correctVisibility == true,
                         "The gist was not made public"
                    );
                    assert(
                         correctDescription == true,
                         "The gist description is not correct"
                    );

                    assert(
                         correctFileOne == true,
                         "File One is not named correctly"
                    );
                    assert(
                         correctFileTwo == true,
                         "File Two is not named correctly"
                    );

                    assert(
                         correctFileOneSize == true,
                         "File One's size is not the same"
                    );
                    assert(
                         correctFileTwoSize == true,
                         "File Two's size is not the same"
                    );
               } catch (err) {
                    console.log("Gist not added correctly");
               }
          });
     });
});
