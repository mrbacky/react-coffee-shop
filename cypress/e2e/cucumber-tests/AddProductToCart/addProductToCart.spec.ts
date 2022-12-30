/// <reference types="cypress" />
import LoginPage from "../../PageObjectModels/LoginPage";
import Navbar from "../../PageObjectModels/Navbar";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { stringToMaybeBoolean } from "@badeball/cypress-cucumber-preprocessor/lib/preprocessor-configuration";
import CartPage from "../../PageObjectModels/CartPage";
import MenuPage from "../../PageObjectModels/MenuPage";

const menuPage = new MenuPage();
const cartPage = new CartPage();
const navbar = new Navbar();
const loginPage = new LoginPage();

Given(`An user is on menu page`, () => {
  cy.visit("/menu");
});

When("the user adds product to cart", () => {
  menuPage.getFirstProduct().click();
});

Then("the user should see added product in cart", () => {
  navbar.getCartCount().contains("1").should("be.visible");
});
