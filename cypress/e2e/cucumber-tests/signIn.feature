Feature: Sign in
    
    As a valid user
    I want to sign in into website

    Scenario: Valid Sign in
        Given An user opens login page
        When the user fills in login form
        And submits login form
        Then the user should see homepage with his first name and last name
    