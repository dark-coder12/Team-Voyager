Feature: Collaborator

Scenario Outline: Remove a Collaborator from an Organization

    Given I am Logged in
    When I open my existing organization
    And I click on People Option
    And I click on Pending Invitations
    And I select the invitation to be deleted
    And I click on Cancel Invitation
    And I confirm <option>
    Then GitHub redirects me to the updated list
 
    Examples:
    | option    |
    | "@cancelCancellation"   |
    | "@confirmCancellation"  |
    
   
