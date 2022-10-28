# Feature: Add Gist

# Scenario Outline: Add Gist
#     Given I am Logged in
#     And I am on Gists page
#     When I enter the name of the Gist
#     And I add the name of the File
#     And I add the <content> of the File
#     And I click on Add New File
#     And I add the name of File 2
#     And I add the <content2> of File 2
#     Then GitHub redirects me to the Result

#     Examples: 
#     | content | content2 | 
#     | ""      | ""       |
#     | "hello "| ""       |
#     | ""      | "hello"  |
#     | "hello" | "hello"  |