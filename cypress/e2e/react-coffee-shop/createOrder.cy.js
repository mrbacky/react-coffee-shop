/// <reference types="cypress" />

describe('Create order', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('creates a new order as guest', () => {
    cy.contains('Menu').click()
    cy.contains("Add").click()
    cy.contains("Add").click()
    cy.contains("Your Cart").click()
    cy.contains("Order").click()
    cy.contains("Yes").click()
    cy.contains("First Name").type("Jane")
    cy.contains("Last Name").type("Doe")
    cy.contains("Email").type("janedoe@gmail.com")
    cy.contains("Confirm").click()
    cy.contains('Order created succesfully').should('be.visible')
  });
});
