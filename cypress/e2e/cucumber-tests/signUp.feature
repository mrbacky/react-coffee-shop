Feature: Sign up
    
    As an user I want to create an account

    Scenario: An user creates new account
        Given An user opens home page
        And hits 'Sign in' button in nav bar
        And hits 'Create a new account' button
        When the user fills in and submits login form
        Then the user should see homepage with his first name and last name