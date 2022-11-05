Feature: Add Gist

Scenario Outline: Add a Gist with Multiple Files

    Given I am logged in to my Account
    And I am on a specific chosen Gists page
    When I enter the <nameGist> of the Gist to be created
    And I add the name <nameFile> of the File to be created
    And I add some content <content> within the File
    And I click on Add New File to submit another File
    Then GitHub displays new fields of input
    When I add the name <nameFileTwo> of the second File
    And I add the content <contentTwo> of the second File
    And I press request for the privacy options of the Gist
    Then GitHub displays the options available
    When I set the privacy <option> for the Gist
    And I set the indent <indentSize> of the Gist
    And I finally click on the Create New Gist Button
    Then GitHub redirects me to the Result

    Examples: 

    | content       | contentTwo | nameGist            |  nameFile     | nameFileTwo    |    option      |  indentSize |
    | ""            | ""         | ""                  |  ""           |   ""           | "@publicGist"  | "@two"      |
    | "random"      | "random"   | ""                  |  "Name1"      |   "Name2"      | "@privateGist" | "@eight"    |
    | ""            | ""         | "GistName"          |  ""           |   ""           | "@privateGist" | "@two"      |
    | ""            | ""         | "GistName"          |  "Name1"      |   ""           | "@publicGist"  | "@four"     |
    | ""            | ""         | "GistName"          |  ""           |   "Name2"      | "@publicGist"  | "@eight"    |
    | ""            | ""         | "GistName"          |  "Name1"      |   "Name2"      | "@privateGist" | "@four"     |
    | "random"      | ""         | "GistName"          |   ""          |   ""           | "@publicGist"  | "@two"      |
    | "random"      | ""         | "GistName"          |  "Name1"      |   "Name2"      | "@privateGist" | "@four"     |
    | ""            | "random"   | "GistName"          |  ""           |    ""          | "@publicGist"  | "@eight"    |
    | ""            | "random"   | "GistName"          |  "Name1"      |   "Name2"      | "@privateGist" | "@two"      |
    | "random"      | "random"   | "GistName"          |   ""          |   ""           | "@privateGist" | "@eight"    |
    | "random"      | "random"   | "GistName"          |   ""          |   "Name2"      | "@privateGist" | "@two"      |
    | "random"      | "random"   | "GistName"          |  "Name1"      |   ""           | "@privateGist" | "@four"     |
    | "random"      | "random"   | "GistName"          |  "Name1"      |   "Name2"      | "@privateGist" | "@two"      |
