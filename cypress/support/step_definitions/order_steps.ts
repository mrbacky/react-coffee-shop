/// <reference types="cypress" />
import LoginPage from "../../e2e/PageObjectModels/LoginPage";
import Navbar from "../../e2e/PageObjectModels/Navbar";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../e2e/PageObjectModels/CartPage";
import MenuPage from "../../e2e/PageObjectModels/MenuPage";

const menuPage = new MenuPage();
const navBar = new Navbar();
const cartPage = new CartPage();

// SECTION: Setup
Given("I am logged in", () => {
  cy.fixture("testAccount").then((user) => {
    cy.logIn(user.email, user.password);
  });

  cy.contains("Sign out").should("be.visible");
});

// SECTION: Actions
When("I add product to cart", () => {
  menuPage.getFirstProduct().click();
});

When("I open cart", () => {
  navBar.getCartButton().click();
});

When("I continue to checkout", () => {
  cartPage.getOrderButton().click();
});

When("I continue as guest", () => {
  cy.contains("Continue as guest?").should("be.visible");
  cartPage.getConfirmContinueAsGuestButton().click();
});

When("I confirm order", () => {
  cy.contains("Confirm").click();
});

When("I fill in my guest details", () => {
  cy.fixture("guestUser").then((guestUser) => {
    cartPage.getFirstNameInput().type(guestUser.firstName);
    cartPage.getLastNameInput().type(guestUser.lastName);
    cartPage.getEmailInput().type(guestUser.email);
  });
});

// SECTION: Assertions
Then("I should see number of items increased in the navbar.", () => {
  navBar.getCartCount().contains("1").should("be.visible");
});
