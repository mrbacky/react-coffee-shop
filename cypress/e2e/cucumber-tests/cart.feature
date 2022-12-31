Feature: Shopping cart

    As an user I want to be able to add product to my cart

    Scenario: Adding product to cart
        Given I am on "menu" page
        When I add product to cart
        Then I should see number of items increased in the navbar.

