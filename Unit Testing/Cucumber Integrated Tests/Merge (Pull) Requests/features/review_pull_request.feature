Feature: Reviewing pull request

Scenario Outline: Reviewing pull request
    Given I am logged into my GitHub account
    When I am currently on my repository
    And I open pull requests tab
    And I open the pull request
    Then GitHub shows me the changes
    When I press review changes button
    And I leave a <review_comment>
    And I press <button> as review option
    And I finish the request changes by submit button
    Then GitHub submit my review
    When I leave a <comment> on conversation tab
    And I press comment button
    And I signout from my account
    Then GitHub signout my account
    Examples:
    | repository_name         || comment                        || review_comment                 || button          |
    | "Testing-Pull-Requests" || "I have requested some changes"|| "I am requesting some changes" || "requestChanges"|      
    | "Testing-Pull-Requests" || "I have approved your request" || "I am approving the request"   || "approveButton" |
