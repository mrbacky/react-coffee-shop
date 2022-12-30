Feature: Sign up

    As an user I want to create an account

    Scenario: An user creates new account
        Given An user opens home page, hits 'Sign in' button in nav bar and hits 'Create a new account' button
        When the user fills in and submits login form
        Then the user should see "Created new user!"