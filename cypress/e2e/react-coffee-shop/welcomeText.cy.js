/// <reference types="cypress" />

describe("Contains welcome text on main page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it('visits main page', () => {
    cy.get("h2").contains("Welcome to React Coffee!")
  });

});