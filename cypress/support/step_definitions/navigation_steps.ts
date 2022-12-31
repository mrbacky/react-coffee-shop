/// <reference types="cypress" />
import LoginPage from "../../e2e/PageObjectModels/LoginPage";
import RegisterPage from "../../e2e/PageObjectModels/RegisterPage";
import Navbar from "../../e2e/PageObjectModels/Navbar";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Chance from "chance";

Given("I am on {string} page", (pagePath: string) => {
  cy.visit("/" + pagePath);
  cy.url().should("include", pagePath);
});
