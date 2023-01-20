import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on {string} page", (pagePath: string) => {
  cy.visit("/" + pagePath);
  cy.url().should("include", pagePath);
});

Then("I should see {string} message", (message: string) => {
  cy.contains(message).should("be.visible");
});
