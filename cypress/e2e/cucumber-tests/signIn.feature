Feature: Sign in

    As a valid user
    I want to sign into website

    Scenario: Valid Sign in
        Given An user opens login page clicks on Sign in button in navbar
        When the user fills in "mr.backy@gmail.com" in email field and "1234567" in password field and hits Sign In button
        Then the user should be logged in and see "Account" and "Sign out" options in navigation bar