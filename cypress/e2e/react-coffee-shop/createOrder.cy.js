/// <reference types="cypress" />

import { Chance } from "chance";
const chance = new Chance();

describe("Create order", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Creates a new order as a guest", () => {
    cy.contains("Menu").click();
    cy.contains("Add").click();
    cy.contains("Add").click();
    cy.contains("Your Cart").click();
    cy.contains("Order").click();
    cy.contains("Yes").click();
    cy.contains("First Name").type("Jane");
    cy.contains("Last Name").type("Doe");
    cy.contains("Email").type(chance.email());
    cy.contains("Confirm").click();
    cy.contains("Your order was created!").should("be.visible");
  });

  it("Creates user during order creation and creates order", () => {
    // pick items
    cy.contains("Menu").click();
    cy.contains("Add").click();
    cy.contains("Add").click();
    cy.contains("Your Cart").click();
    cy.contains("Order").click();
    // create account
    cy.contains("Sign in/Create Account").click();
    cy.contains("Create a new account").click();
    cy.contains("First Name").type("test first name");
    cy.contains("Last Name").type("test last name");
    const testEmail = chance.email()
    console.log("test email: ", testEmail)
    cy.contains("Your Email").type(testEmail);
    cy.contains("Your Password").type("1234567");
    cy.contains("Create Account").click();
    cy.get('button[type="submit"').click()
    cy.contains("Created new user!").should("be.visible");
    cy.contains("Please login using your newly created credentials.").should("be.visible");
    // login
    cy.contains("Your Email").type(testEmail);
    cy.contains("Password").type("1234567");
    cy.get('button').contains("Sign In").click()
    // create order
    cy.contains("Your Cart").click()
    cy.contains("Order").click();
    cy.contains("Confirm").click();
    cy.contains("Your order was created!").should("be.visible");
  });
});
