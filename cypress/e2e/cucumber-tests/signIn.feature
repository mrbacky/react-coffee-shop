Feature: Sign in

    Background:
        Given An user opens login page by clicking on Sign in button in navbar

    Scenario: Valid Sign in
        When the user fills in "mr.backy@gmail.com" in email field and "1234567" in password field and hits Sign In button
        Then the user should be logged in and see "Account" and "Sign out" options in navigation bar

    Scenario: Failing sign in - invalid email
        When the user fills in "invalidEmail@gmail.com" in email field and "1234567" in password field and hits Sign In button
        Then the user sign in should be rejected and user should see message "No user found with this email address. Please try again."

    Scenario: Failing sign in - wrong password
        When the user fills in "mr.backy@gmail.com" in email field and "11111111" in password field and hits Sign In button
        Then the user sign in should be rejected and user should see message "Incorrect password. Please try again."