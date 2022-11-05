Feature: Collaborator2

Scenario Outline: Add a Non Existing Collaborator to an Organization

    Given I am Logged In
    And I open my existing Organization
    When I click on Invite Someone
    Then GitHub displays a pop-up to search the user
    When I add the <name> to be invited
    And I click on Invite Button
    Then GitHub redirects me to the Result

    Examples: 
    | name                          |
    | ""                            |
    | "userNameNotFound101Invalid"  |

