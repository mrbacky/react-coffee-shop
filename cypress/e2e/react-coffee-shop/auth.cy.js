import { Chance } from "chance";

describe('User authentication', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  const chance = new Chance();
  const testEmail = chance.email()
  it('sign up an user', () => {
    cy.contains("Sign in").click();
    cy.contains("Create a new account").click();
    cy.contains("First Name").type(chance.first());
    cy.contains("Last Name").type(chance.last());
    console.log("test email: ", testEmail)
    cy.contains("Your Email").type(testEmail);
    cy.contains("Your Password").type("1234567");
    cy.contains("Create Account").click();
    cy.get('button[type="submit"').click()
    cy.contains("Created new user!").should("be.visible");
    cy.contains("Please login using your newly created credentials.").should("be.visible");
  });

  it('sign in an user', () => {
    cy.contains("Sign in").click();
    cy.contains("Your Email").type(testEmail);
    cy.contains("Password").type("1234567");
    cy.get('button').contains("Sign In").click()
  });
});
