Feature: Collaborator

Scenario Outline: Add an existing Collaborator to an Organization
    Given I am Logged In
    When I open my existing Organization
    And I click on Invite Someone
    And I add the <name> to be invited
    And I select the name from the options
    And I click on Invite Button
    And I choose <rights> of the new invitation
    And I click on Send Invitation

     
    Examples: 
    | name                          | rights |
    | "burakbinmunir"               | "@memberCheckBox" |
    | ""                            | "@ownerCheckBox"  |
    | "userNameNotFound101Invalid"  | "@memberCheckBox" |
