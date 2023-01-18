/// <reference types="cypress" />
import LoginPage from "../../e2e/PageObjectModels/LoginPage";
import RegisterPage from "../../e2e/PageObjectModels/RegisterPage";
import Navbar from "../../e2e/PageObjectModels/Navbar";
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Chance from "chance";
import { Before } from "@badeball/cypress-cucumber-preprocessor/lib/methods";

const chance = new Chance();

const EMAIL_INPUT = chance.email();
const FIRST_NAME_INPUT = chance.first();
const LAST_NAME_INPUT = chance.last();
const PASSWORD_INPUT = "1234567";

const registerPage = new RegisterPage();
const navbar = new Navbar();
const loginPage = new LoginPage();

// SECTION: Actions
Before(() => {
  console.log("clear db");
  cy.request("POST", "/api/db/db");
  console.log("init db");
  // TODO: init db request
});

When(
  "I fill in {string} in email field and forget to input password",
  (emailInput: string) => {
    loginPage.getEmailInput().type(emailInput);
  }
);

When(
  "I fill in {string} in email field and {string} in password field",
  (emailInput: string, passwordInput: string) => {
    loginPage.getEmailInput().type(emailInput);
    loginPage.getPasswordInput().type(passwordInput);
  }
);

When(
  "I fill in {string} in password field and I forget to input email",
  (passwordInput: string) => {
    loginPage.getPasswordInput().type(passwordInput);
    loginPage.getEmailInput().should("be.empty");
  }
);

When("I click Sign In button", () => {
  loginPage.getLogInButton().click();
});

When("I click on Create a new account button", () => {
  loginPage.getCreateNewAccountButton().click();
});

When("I fill in my details and submit", () => {
  registerPage.getFirstNameField().type(FIRST_NAME_INPUT);
  registerPage.getLastNameField().type(LAST_NAME_INPUT);
  registerPage.getEmailField().type(EMAIL_INPUT);
  registerPage.getPasswordField().type(PASSWORD_INPUT);
  registerPage.getCreateAccountButton().click();
});

// SECTION: Assertions
Then("I should be rejected and see message {string}", (message: string) => {
  cy.contains(message).should("be.visible");
});

Then(
  `I should be logged in and see {string} and {string} options in navigation bar`,
  (accountNavButton: string, SignOutNavButton: string) => {
    cy.contains(accountNavButton).should("be.visible");
    cy.contains(SignOutNavButton).should("be.visible");
  }
);

Then("I should see {string} message", (message: string) => {
  cy.contains(message).should("be.visible");
});
