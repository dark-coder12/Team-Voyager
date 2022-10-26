Feature('Gist');

Scenario('User adds a new Gist', ({ I }) => {


    I.amBearerAuthenticated(secret(process.env.key));
 
    I.sendPostRequest('https://api.github.com/gists', {

        description: 'Example of a gist',
        'public': false,
        files: {
          'README.md': {
            content: 'Hello World'
          }
        }
      })
});



