import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see {string} message", (message: string) => {
  cy.contains(message).should("be.visible");
});
