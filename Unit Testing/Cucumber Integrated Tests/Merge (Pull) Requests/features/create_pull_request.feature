Feature: Creating a pull request

Scenario Outline: Creating a pull request
    Given I am logged into GitHub
    When I open the desried repository
    And I open file
    And I select edit button
    And I made <newChanges> as changes to file 
    And I enter <commit_name> as new commit name
    And I enter <optional_commit_name> as optional message
    And I select commit in separate branch
    And I enter <branch_name> as separate branch name
    And I press purpose changes button
    And I press create pull request button

    Examples:
    |   repository_name          || newChanges                        || commit_name   || optional_commit_name                        || branch_name      |
    |   "Testing-Pull-Requests"  || "print\(Hello from unit Testing)" || "Updated main"|| "main file is updated for testing purposes" || "Testing-branch" |