/// <reference types="cypress" />
import LoginPage from "../../PageObjectModels/LoginPage";
import Navbar from "../../PageObjectModels/Navbar";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const navbar = new Navbar();
const loginPage = new LoginPage();

Given(`An user opens login page clicks on Sign in button in navbar`, () => {
  cy.visit("/");
  navbar.getSignInButton().click();
});

When(
  `the user fills in {string} in email field and {string} in password field and hits Sign In button`,
  (emailInput: string, passwordInput: string) => {
    loginPage.getEmailInput().type(emailInput);
    loginPage.getPasswordInput().type(passwordInput);
    loginPage.getLogInButton().click();
  }
);
Then(
  `the user should be logged in and see {string} and {string} options in navigation bar`,
  (accountNavButton: string, SignOutNavButton: string) => {
    cy.contains(accountNavButton).should("be.visible");
    cy.contains(SignOutNavButton).should("be.visible");
  }
);
