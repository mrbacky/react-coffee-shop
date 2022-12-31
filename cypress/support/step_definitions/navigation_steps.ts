/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on {string} page", (pagePath: string) => {
  cy.visit("/" + pagePath);
  cy.url().should("include", pagePath);
});

When("I click on {string} button", (buttonText: string) => {
  cy.contains(buttonText).should("be.visible").click();
});

