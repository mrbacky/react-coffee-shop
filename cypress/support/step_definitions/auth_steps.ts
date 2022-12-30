/// <reference types="cypress" />
import LoginPage from "../../e2e/PageObjectModels/LoginPage";
import RegisterPage from "../../e2e/PageObjectModels/RegisterPage";
import Navbar from "../../e2e/PageObjectModels/Navbar";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Chance from "chance";

const chance = new Chance();

const EMAIL_INPUT = chance.email();
const FIRST_NAME_INPUT = chance.first();
const LAST_NAME_INPUT = chance.last();
const PASSWORD_INPUT = "1234567";

const registerPage = new RegisterPage();
const navbar = new Navbar();
const loginPage = new LoginPage();

Given(
  `An user opens login page by clicking on Sign in button in navbar`,
  () => {
    cy.visit("/");
    navbar.getSignInButton().click();
  }
);

When(
  "the user fills in {string} in email field, forgets to input password and submits form",
  (emailInput: string) => {
    loginPage.getEmailInput().type(emailInput);
    loginPage.getLogInButton().click();
  }
);

When(
  "the user fills in {string} in password field, forgets to input email and submits form",
  (passwordInput: string) => {
    loginPage.getPasswordInput().type(passwordInput);
    loginPage.getLogInButton().click();
  }
);

When(
  "the user fills in {string} in email field and {string} in password field and hits Sign In button",
  (emailInput: string, passwordInput: string) => {
    loginPage.getEmailInput().type(emailInput);
    loginPage.getPasswordInput().type(passwordInput);
    loginPage.getLogInButton().click();
  }
);

Then("the user should see message {string}", (message: string) => {
  cy.contains(message).should("be.visible");
});

Then(
  "the user sign in should be rejected and user should see message {string}",
  (message: string) => {
    cy.contains(message).should("be.visible");
  }
);

Then(
  `the user should be logged in and see {string} and {string} options in navigation bar`,
  (accountNavButton: string, SignOutNavButton: string) => {
    cy.contains(accountNavButton).should("be.visible");
    cy.contains(SignOutNavButton).should("be.visible");
  }
);

Given(
  "An user opens home page, hits 'Sign in' button in nav bar and hits 'Create a new account' button",
  () => {
    cy.visit("/");
    navbar.getSignInButton().click();
    loginPage
      .getCreateNewAccountButton()
      .contains("Create a new account")
      .click();
  }
);

When("the user fills in and submits login form", () => {
  registerPage.getFirstNameField().type(FIRST_NAME_INPUT);
  registerPage.getLastNameField().type(LAST_NAME_INPUT);
  registerPage.getEmailField().type(EMAIL_INPUT);
  registerPage.getPasswordField().type(PASSWORD_INPUT);
  registerPage.getCreateAccountButton().click();
});

Then("the user should see {string}", (createdNewUserText: string) => {
  cy.contains(createdNewUserText).should("be.visible");
});
