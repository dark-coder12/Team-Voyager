Feature: Download my own Gist

Scenario: Download a gist successfully

    Given I am Logged in
    And I am on the gist I want to download
    When I click on the download icon
    Then GitHub automatically downloads the gist for me
    
