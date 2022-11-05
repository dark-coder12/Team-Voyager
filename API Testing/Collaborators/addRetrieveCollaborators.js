Feature("Add Collaborator");

var assert = require("assert");
require("dotenv").config();

const collaborators = {
     allCollabs: ["dark-coder12", "burakbinmunir"],

     checkCollab: function (collaborator) {
          return this.allCollabs.includes(collaborator);
     },
};

Scenario(
     "Testing adding a collaborator and retrieving collaborators",
     ({ I }) => {
          I.amBearerAuthenticated(secret(process.env.key));

          I.sendPutRequest(
               " https://api.github.com/repos/dark-coder12/monokai/collaborators/burakbinmunir"
          ) // adding a collaborator

               .then((value) => {
                    try {
                         assert.equal(value.status, 204);

                         I.sendGetRequest(
                              "https://api.github.com/repos/dark-coder12/monokai/collaborators"
                         ) // to check all of the expeected collaborators are found as expectations

                              .then((val) => {
                                   for (repo in val.data) {
                                        try {
                                             var col = val.data[repo].login;

                                             assert.equal(
                                                  collaborators.checkCollab(
                                                       col
                                                  ),
                                                  true
                                             );
                                             console.log(
                                                  val.data[repo].login,
                                                  " is present as collaborator"
                                             );
                                        } catch {
                                             console.log(
                                                  val.data[repo].login,
                                                  " is not present as collaborator\n"
                                             );
                                        }
                                   }
                              });
                    } catch {
                         console.log(
                              "Collaborator was not added\n",
                              value.status
                         );
                    }
                    I.sendGetRequest(
                         " https://api.github.com/repos/dark-coder12/monokai/collaborators/burakbinmunir"
                    ) // to check a single person as collaborator

                         .then((val) => {
                              try {
                                   assert.equal(val.status, 204);
                                   console.log("Given user is a collaborator");
                              } catch {
                                   console.log(
                                        "Given user is not a collaborator"
                                   );
                              }
                         });
               });
     }
);
