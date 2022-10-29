Feature: Reviewing pull request

Scenario Outline: Reviewing pull request
    Given I am logged into my GitHub account
    When I navigate to my repository
    And I open pull requests tab
    And I open the pull request
    Then I review the changes
    And I press review changes button
    And I leave a comment
    And I press request changes button
    And I finish the request changes by submit button
    When I navigate to pull request tab
    And I see the pull request
    Then I review the new changes
    And I press review changes button for approval purpose
    And I press approve button
    And I finish the approve by submit button
    When I leave a <comment> on conversation tab
    And I press comment button
    Examples:
    | repository_name         || comment                             |
    | "Testing-Pull-Requests" || "I have approved your pull request" |