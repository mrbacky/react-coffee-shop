import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on {string} page", (pagePath: string) => {
  cy.visit("/" + pagePath);
  cy.url().should("include", pagePath);
});
