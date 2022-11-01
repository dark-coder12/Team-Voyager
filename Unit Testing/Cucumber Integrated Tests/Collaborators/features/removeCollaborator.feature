Feature: Collaborator

Scenario Outline: Remove a Collaborator from an Organization
    Given I am Logged In
    When I open my existing Organization
    And I click on People Option
    And I click on Pending Invitations
    And I select the invitation to be deleted
    And I click on Cancel Invitation
    And I confirm <option>
    Then GitHub redirects me to the Result
 
    Examples:
    | option    |
    | "@cancelCancellation"   |
    | "@confirmCancellation"  |
    
   
