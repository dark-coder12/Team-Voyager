Feature: Login

@login
Scenario Outline: Login
    Given I open GitHubs page
    When I enter Email
    And I enter Password
    Then GitHub redirects me to Home