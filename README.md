# software-quality-assurance-gitlab
A university project focused on the detailed QA Testing of GitLab, done by a team of 3. Testing includes automated scripts.

This GitHub repository holds a major section for all meeting minutes, under the same heading folder.

Other folders will solely include NightWatch JavaScript Code for automated script testing of GitLab / GitHub features.

These features have been mentioned on our Notion Workspace.

https://www.notion.so/x12/Voyager-Home-85b333a7533e43f69bcc512a62e50577


#GitHub’s APIs

Why GitHub uses two different APIs

GitHub makes use of both REST and GraphQL APIs, and the main reason behind this is that some features are supported in one API while some in the other one. Users are not restricted to choose only one of these, and depending on their expertise , need, and comfort level, they may either choose the former or the latter. 
GitHub does not explicitly prefer one over the other. 
“You don't need to exclusively use one API over the other” -  
https://docs.github.com/en/developers/overview/about-githubs-apis#choosing-the-graphql-api


What tools to use for interaction with the API

GitHub’s documentation currently provides documentation for the following tools. With these, users can easily carry out API commands.

•	GitHub CLI
•	Curl
•	Octokit Library

Users may use third party libraries as well. 

What GitHub says about REST / GraphQL APIs

As mentioned in our initial research commits i.e. Files in the API_Documentation Folder, GitHub clearly differentiates the mode of responses for both. 
GraphQL gives you the advantage to only receive the data which you ask for, and a the “pre-known structure”. On the other hand, REST API returns all data related to your request, even if you did not ask for it, and this is done as a “pre-determined structure”. 
Another possibility is that a single GraphQL request can provide data equivalent to multiple REST APIs, mainly due to its flexibility. This is made clear with an example.
Suppose you wish to get the login of 10 followers of each of your first 10 followers. You can make a single GraphQL request to achieve this:

{
  viewer {
    followers(first: 10) {
      nodes {
        login
        followers(first: 10) {
          nodes {
            login
          }
        }
      }
    }
  }
}

#GitHub and GraphQL

GitHub first announced the shift towards GraphQL back in 2016, as mentioned in their announcement post. 
https://github.blog/2016-09-14-the-github-graphql-api/

“GitHub chose GraphQL because it offers significantly more flexibility for our integrators. The ability to define precisely the data you want—and only the data you want—is a powerful advantage over traditional REST API endpoints. GraphQL lets you replace multiple REST requests with a single call to fetch the data you specify.”

This section of the documentation research focuses on how to set up GraphQL Integration and be able to make requests for GitHub’s features.

1.  Authentication

To perform operations using APIs that only a logged in user can do, you need to get a personal access token (classic). This can be done by accessing developer settings from your GitHub profile and generating a token from there.
The following scopes are usually needed to perform basic functions
•	repo
•	read:packages
•	read:org
•	read:public_key
•	read:repo_hook
•	user
•	read:discussion
•	read:enterprise
•	read:gpg_key


2. Root Endpoint

To access GitHub’s API, the following exact endpoint has to be used: https://api.github.com/graphql

3. Tools

GitHub recommends using GraphQL explorer to make GraphQL calls. GraphQL requests are always made using JSON bodies, so if you’re using HTTP instead of explorer, the HTTP verb always remains POST. The differentiation amongst requests is made by either using queries or mutations.


4. Parts of GraphQL

Query: Queries are similar to GET Requests, that are just used to fetch data from the API rather than mutate it. To specify a query, fields till the last level of nesting must be specified to get only the request data.
query {
  JSON-OBJECT-TO-RETURN
}


Mutation: Mutations involve changing data, and thus perform actions similar to POST / PATCH and DELETE. This involves mutation of already existing data.
Mutation name, input object, and payload object are required to formulate a mutation.
mutation {
  MUTATION-NAME(input: {MUTATION-NAME-INPUT!}) {
    MUTATION-NAME-PAYLOAD
  }
}


Query Scenario

Find 20 recently closed issues, and list their title, URL and first five labels.

query {
  repository(owner:"octocat", name:"Hello-World") {
    issues(last:20, states:CLOSED) {
      edges {
        node {
          title
          url
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}

Mutation Scenario

The following scenario will first fetch the issue ID of “Hello World” Repository and add an emoji reaction to the issue.
query FindIssueID {
  repository(owner:"octocat", name:"Hello-World") {
    issue(number:349) {
      id
    }
  }
}

mutation AddReactionToIssue {
  addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}

The response for this mutation is as follows: 

{
  "data": {
    "addReaction": {
      "reaction": {
        "content": "HOORAY"
      },
      "subject": {
        "id": "MDU6SXNzdWUyMTc5NTQ0OTc="
      }
    }
  }
}

5. Schema Retrospection

To further aid users, GitHub suggests querying a GraphQL schema to get more information about it. For instance, get details about the schema or any type of feature, using __schema or __type. The parameters are returned.
query {
  __schema {
    types {
      name
      kind
      description
      fields {
        name
      }
    }
  }
}
query {
  __type(name: "Repository") {
    name
    kind
    description
    fields {
      name
    }
  }
}

The same can be done using CURL commands.
$ curl -H "Authorization: bearer TOKEN" https://api.github.com/graphql
Note:  "message": "Bad credentials" or 401 Unauthorized is usually returned when your token is not valid.

6. Resource Limitations

A brilliant yet overlooked feature that GitHub’s GraphQL supports is resource limitation. To avoid queries / mutations that exploit server resources, there are three standards that have been put forth, which must be met by all users.
1.	Provide a first or last argument for any API request.
2.	The first or last argument must be within 1 – 100.
3.	A total of more than 500,000 nodes cannot be requested.
First or last means the number of objects that must be returned. For instance, if you’re requesting for repositories, do you want first 50, or so on. Total Nodes would mean how many times the most nested object is asked for. 

Code Reference

query {
  viewer {
    repositories(first: 50) {
      edges {
        repository:node {
          name
          issues(first: 10) {
            totalCount
            edges {
              node {
                title
                bodyHTML
              }
            }
          }
        }
      }
    }
  }
}

Calculation

50         = 50 repositories
 +
50 x 10  = 500 repository issues
= 550 total nodes


#GitHub and REST


1. REST Request

REST API requests are made using an HTTP method and the path of the feature that is required. The base https link remains the same, which is: https://api.github.com
The specific request that is to be made follows the above URL. As with GraphQL, the examples are documented with 
•	CLI (Command Line)
•	cURL
•	JavaScript


2. Authentication

There are many features which can only be achieved once a user is logged in, and the API will only know this if you get a valid token from your developer settings using generate a personal access token. Scope permissions are also to be specified in the setting to ensure the token covers the needed functionality.
If the API is to be used from another user’s or organization’s perspective, GitHub App can be utilized.


3. Env Variables

One thing that is worth mentioning is that such authentication tokens should never be placed directly within the project and should be hidden in the .env file.
const octokit = new Octokit({ 
  auth: process.env.TOKEN,
});


4. Headers

A header is used to pass additional context regarding the request or response, like preferred media formats. GitHub’s documentation states that an Accept header is to be used for most features, with the value: application/vnd.github+json.
A library known as Octokit is used to facilitate JavaScript API usage. It automatically adds this Accept Header internally and thus, it need not be mentioned. Other headers need to be explicitly stated using the header heading, with key value pairs as in JSON.

await octokit.request("GET /octocat", {
  headers: {
    "content-type": "text/plain",
  },
});
This tells the API to expect text content.

5. Path and Path Parameters

Once the headers are specified, the request now requires information about the exact pathway to be fetched / modified. 
The Type of Request
The request made by the user might be
•	GET: This request is used to fetch (or get) information
•	POST: This request is used to add a new object to the feature. i.e. A new repository.
•	PATCH: This request is used to update an existing object of a feature. i.e. Update an issue.
•	DELETE: This request is used to delete an existing object of a feature. i.e. Delete a repository.

Such requests need a full pathway to follow, to reach the desired object to get / modify. For example, to access the issues of a repository: 
/repos/{owner}/{repo}/issues
Now the parameters which are dynamic (changed per user need) are mentioned in {} curly braces and are called path parameters. These parameters are given concrete values within the JSON Object.
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife"
});


6. Query Parameters

A query parameter, like path parameters, is specified within the body of the request using key / value pairs. The purpose of such parameters is to control what data is to be returned for a request. Keep in mind, this does not allow you to fetch only certain attributes (as in GraphQL), it just allows for some basic customization. This may be to specify how many items are returned, or in what direction the sorting should be done.
In JavaScript, using Octokit library, all such parameters are passed in the second argument. The following request is a GET request, used to retrieve the already existing issues in the Spoon-Knife repository.

await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 2,
  sort: "updated",
  direction: "asc",
});


7. Body Parameters

Body parameters are specific to the kind of feature which is to be used, and allow a user to pass additional data to the request. On GitHub, for instance, if a user aims to create an issue, attributes that are only specific to an issue, such as a title, and description body, can be specified here.
The following request is a POST request as it is used to create an issue, with the body parameters being title and body to help create an issue called “Created with the REST API”.

await octokit.request("POST /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  title: "Created with the REST API",
  body: "This is a test issue created by the REST API",
});

8. Response Body

Once a request is successfully made, the result is returned as a JSON object, unless the user specifies otherwise. If no data was fetched, the JSON object shall be undefined.

For a repository I own, “search-robots-react”, a response body may resemble the form: 
{
  "id": 516045910,
  "node_id": "R_kgDOHsI8Vg",
  "name": "search-robots-react",
  "full_name": "dark-coder12/search-robots-react",
  "private": false,
  "owner": {
    "login": "dark-coder12"
  }
  "visibility": "public",
  "forks": 0,
  "open_issues": 0,
  "watchers": 0,
  "default_branch": "main",
  "temp_clone_token": null,
  "network_count": 0,
  "subscribers_count": 1
}


9. REST API Scenario

To fetch the issues of a repository named Spoon Knife, and to display the title and author on the terminal the following API call is made. The method “GET” is specified, the path is given to the repository which is kept dynamic. Path, Query and Body Parameters include owner, repository, and how many issues to retrieve. From the vast data returned, the data object retrieved is mapped over to hold the title and authorID of each issue. This is then displayed using console.log. 

A try and catch block is used to resolve errors, and is a good practice.

try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
    per_page: 2,
  });

  const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})

  console.log(titleAndAuthor)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}


10. More Documentation on REST

A user may choose to perform a request for any feature on GitHub, and for each feature, an API path and required / optional parameters are specified. These can be accessed using the following link.
https://docs.github.com/en/rest
