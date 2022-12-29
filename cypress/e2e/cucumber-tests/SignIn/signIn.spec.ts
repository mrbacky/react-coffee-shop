/// <reference types="cypress" />
import LoginPage from "../../PageObjectModels/LoginPage";
import Navbar from "../../PageObjectModels/Navbar";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const navbar = new Navbar();
const loginPage = new LoginPage();

Given("An user opens login page", () => {
  cy.visit("/auth");
  //   navbar.getSignInButton().click();
});

When("the user fills in and submits login form", () => {
  loginPage.getEmailInput().type("mr.backy@gmail.com");
  loginPage.getPasswordInput().type("1234567");
  loginPage.getLogInButton().click();
});

Then("the user should see homepage with his first name and last name", () => {
  cy.get("#welcome-message")
    .contains("Welcome back Radoslav Backovsky, to React Coffee!")
    .should("be.visible");
});
