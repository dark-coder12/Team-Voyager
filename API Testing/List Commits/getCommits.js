
Feature('Repository Commits');

Scenario('Getting a commit', ({ I }) => {
  
  var b = "burakbinmunir"
  I.sendGetRequest('https://api.github.com/repos/burakbinmunir/SCD-Assignment-02/commits')
  .then((value) => {
    // counting the retrived number of commits
    var count = 0;
    for(repo in value.data){
      count++;
    }
    console.log("The number of commits for given repository is: " + count);
    if (count  == 24){ // assertion for checking count
      console.log("Test passed");
    }

    // printing the messages which were passed at the time of commiting
    console.log("Printing commit messages\n");
    for (repo in value.data){
      console.log(value.data[repo].commit.message + '\n');
    }
  })
});
