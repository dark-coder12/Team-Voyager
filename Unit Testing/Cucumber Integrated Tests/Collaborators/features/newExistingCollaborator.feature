Feature: Collaborator

Scenario Outline: Add an existing Collaborator to an Organization

    Given I am Logged In
    And I open my existing Organization
    When I click on Invite Someone
    Then GitHub displays a pop-up to search the user
    When I add the <name> to be invited
    And I select the name from the options
    And I click on Invite Button
    Then GitHub confirms the rights of the user
    When I choose <rights> of the new invitation
    And I click on Send Invitation
    Then GitHub redirects me to the Result
     
    Examples: 
    | name                          | rights |
    | "burakbinmunir"               | "@memberCheckBox" |
    



