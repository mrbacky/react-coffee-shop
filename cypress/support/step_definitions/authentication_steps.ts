/// <reference types="cypress" />
import LoginPage from "../../e2e/PageObjectModels/LoginPage";
import RegisterPage from "../../e2e/PageObjectModels/RegisterPage";
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Before } from "@badeball/cypress-cucumber-preprocessor/lib/methods";

const registerPage = new RegisterPage();
const loginPage = new LoginPage();
let user: any;

// SECTION: Actions
Before(() => {
  // cy.resetDb();
  cy.request("POST", "/api/db/db");
  //cy.seedDb();
  cy.request("POST", "/api/db/seed");

  cy.fixture("signUpAccount").then(function (data) {
    user = data;
  });
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
  registerPage.getFirstNameField().type(user.firstName);
  registerPage.getLastNameField().type(user.lastName);
  registerPage.getEmailField().type(user.email);
  registerPage.getPasswordField().type(user.password);
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
