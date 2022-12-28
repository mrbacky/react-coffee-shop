/// <reference types="cypress" />
import { Given, Then, And, When } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../PageObjectModels/LoginPage';
import Navbar from "../../PageObjectModels/Navbar"

const navbar = new Navbar();
const loginPage = new LoginPage();

Given('An user opens login page', () => {
    cy.visit("/")
    navbar.getSignInButton().click();
})

When('the user fills in login form', () => {
    loginPage.getEmailInput().type('mr.backy@gmail.com')
    loginPage.getPasswordInput().type('1234567')
})

And('submits login form', () => {
    loginPage.getLogInButton().click();
})

Then('the user should see homepage with his first name and last name', () => {
    cy.get('#welcome-message')
        .contains("Welcome back Radoslav Backovsky, to React Coffee!")
        .should("be.visible")
})