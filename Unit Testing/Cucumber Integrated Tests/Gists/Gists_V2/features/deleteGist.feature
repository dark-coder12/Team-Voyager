Feature: Delete my own Gist

Scenario: Delete a gist successfully

    Given I am Logged in
    And I am on the gist I want to delete
    When I click on the delete icon
    And I accept the JavaScript confirmation alert
    Then GitHub automatically deletes the gist for me
   
