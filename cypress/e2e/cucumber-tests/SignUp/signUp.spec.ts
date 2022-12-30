import LoginPage from "../../PageObjectModels/LoginPage";
import Navbar from "../../PageObjectModels/Navbar";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Chance } from "chance";
import RegisterPage from "../../PageObjectModels/RegisterPage";

const chance = new Chance();
const navbar = new Navbar();
const loginPage = new LoginPage();
const registerPage = new RegisterPage();

const EMAIL_INPUT = chance.email();
const FIRST_NAME_INPUT = chance.first();
const LAST_NAME_INPUT = chance.last();
const PASSWORD_INPUT = "1234567";

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
