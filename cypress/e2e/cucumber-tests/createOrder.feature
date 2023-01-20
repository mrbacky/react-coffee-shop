Feature: Create order

    As an user, I want to be able to create an order

    Background:
        Given I am on "menu" page
        And I add product to cart

    Scenario: Create order as logged in user
        Given I am logged in
        When I open cart
        And I continue to checkout
        And I confirm order
        Then I should see "Your order was created!" message

    Scenario: Create order as guest user
        When I open cart
        And I continue to checkout
        And I continue as guest
        And I fill in my guest details
        And I confirm order
        Then I should see "Your order was created!" message




