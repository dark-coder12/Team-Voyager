Feature('Repository Commits');
var assert = require("assert");
require('dotenv').config()


Scenario('Getting a commit', ({ I }) => {
  
  
  // declaring object for expected output
  const messages = {
    expectedCommitMessages : [
      "Khatam" ,"Done Q6" , "Done Q5", "Done Q4", "Done Q3", "Done Q2" ,"Done Q1" , "Done",
      "TEmp", "Initial commit" ,"Set up the assignment", "Checked cout statement", "Added date task",
      'Yet not working fine', "Not wokring this one too", "Working fine now", "Partially completed stop words question",
      "Stop word working fine", "Added Programmiz algorithm", "Works fine for ascending and random order not for descending order",
      "Working perfectly fine", "Done with quick sort", "Done question 1", "Used Count Sort", "Done method-1 and method-2 of Question 3"
      , " Not wokring this one too"
    ],

    containsMessage : function(actualMessage)  { // function for checking wheather the passed (parameter) message is in expected messages
        return this.expectedCommitMessages.includes(actualMessage);
    }
    
  }
     
  var expectedCount = 24;

  I.sendGetRequest('https://api.github.com/repos/burakbinmunir/SCD-Assignment-02/commits')
    .then((value) => {
     
      try {
        assert.equal(value.status, 200); // assertion for status
      
        var count = 0;
        for(repo in value.data){
          count++;
        }

        try {
          assert.equal(count, expectedCount); // assertion for count
          console.log("The number of commits for given repository is: " , {expectedCount} , " " ,{count});
        }
        catch {
          console.log("The count of commits is not equal to epxected count ",{expectedCount}, " ",{count})
        }
        

        // printing the messages which were passed at the time of commiting
        console.log("Printing commit messages\n");
        for (repo in value.data){
          console.log(value.data[repo].commit.message + ' ');

          var presence = false;
          try { // assertion for checking the messages in expected commit messages
            presence = messages.containsMessage(value.data[repo].commit.message);
            assert.equal(presence, true);
            console.log({presence}, "\n");
          }
          catch {
            console.log("Actual commit message not found in expeected commit messages ",{presence} , "\n" ); 
          }
        }
      }
      catch{
        console.log("Value not found\n");
      }
    })
});
