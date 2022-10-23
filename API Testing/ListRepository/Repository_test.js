Feature('Repository');

Scenario('test repository list (basic)', ({ I }) => {

    I.sendGetRequest('https://api.github.com/users/dark-coder12/repos')
    .then((value) => {
        
        for(repo in value.data){

            console.log(value.data[repo].name);
        } 
      })
      .catch((err) => {
        console.error(err);
      });
});
