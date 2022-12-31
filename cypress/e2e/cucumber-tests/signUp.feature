Feature: Sign up

    As an user I want to create an account

    Scenario: An user creates new account
        Given I am on "auth" page
        When I click on "Create a new account" button
        And I fill in my details and submit
        Then the user should see "Created new user!" message