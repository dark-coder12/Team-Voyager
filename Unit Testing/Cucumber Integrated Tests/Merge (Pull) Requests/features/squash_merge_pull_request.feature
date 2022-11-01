Feature: Squashing Merging and Closing pull request

Scenario Outline: Squashing Merging and Closing pull request
    Given I am on log my self into my existing GitHub account
    And I go to my desired repository
    When I navigate to my repositorys pull request tab
    And I open my created pull request
    Then GitHub redirects me to pull request
    When I open merging options dropdown
    And I choose squash and merge option
    And I click squash and merge button
    And I enter merge <message> as messgae
    And I click confirm squash and merge button
    Then GitHub squashes commit and merges my pull request
    When I click delete branch button
    And I click delete branch button
    Then GitHub deletes the branch
    Examples:
    | message                                               |
    | "This message is to test the closing a merge request" |