/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


import LoginPage from "../e2e/PageObjectModels/LoginPage";

Cypress.Commands.add('resetDb', () => {
    // call endpoint to clean db before testing
    cy.request('POST', '/api/db/db')
})

Cypress.Commands.add('logIn', (email, password) => {
    const loginPage = new LoginPage();

    cy.visit("/auth");
    loginPage.getEmailInput().type(email);
    loginPage.getPasswordInput().type(password);
    loginPage.getLogInButton().click();
})

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
        resetDb(): Chainable,
        logIn(email: string, password: string): Chainable
    }
  }
}

export {}