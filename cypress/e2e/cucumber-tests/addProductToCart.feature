Feature: Add an product to cart

    A user adds product to cart

    Scenario: A user adds product to cart
        Given An user is on menu page
        When the user adds product to cart and opens cart
        Then the user should see added product in cart