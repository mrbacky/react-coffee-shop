Feature: Sign in

    Background:
        Given I am on "auth" page

    Scenario: Valid Sign in
        When I fill in "testaccount@gmail.com" in email field and "1234567" in password field
        And I click Sign In button
        Then I should be logged in and see "Account" and "Sign out" options in navigation bar

    Scenario: Failing sign in - not existing email
        When I fill in "notExistingEmail@gmail.com" in email field and "1234567" in password field
        And I click Sign In button
        Then I should be rejected and see message "No user found with this email address. Please try again."

    Scenario: Failing sign in - wrong password
        When I fill in "testaccount@gmail.com" in email field and "11111111" in password field
        And I click Sign In button
        Then I should be rejected and see message "Incorrect password. Please try again."

    Scenario: An User forgets to input password
        When I fill in "testaccount@gmail.com" in email field and forget to input password
        And I click Sign In button
        Then I should see "Please enter your password" message

    Scenario: An User forgets to input email
        When I fill in "1234567" in password field and I forget to input email
        And I click Sign In button
        Then I should see "Please enter your email" message

