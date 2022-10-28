Feature: Create new file

@createnewfile
Scenario Outline: 
    Given I am logged in
    When I search <repository_name>
    And I select searched repository
    When I select create file
    And I type <file_name>
    And I type <code> in code editor
    And I enter <commit_name> as commit name
    And I enter <optional_commit_message> as commit optional message
    And I press create commit button
    Then GitHub creates the commit
    
    Examples: 
    |   repository_name       ||   file_name   || commit_name    ||optional_commit_message||code                         |
    | "Testing-Pull-Requests" ||   "main.py"  || "First Commit" ||"This is first commit" ||"print(Hello From Python)" |
    
    
