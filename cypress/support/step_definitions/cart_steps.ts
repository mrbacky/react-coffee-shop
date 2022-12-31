/// <reference types="cypress" />
import LoginPage from "../../e2e/PageObjectModels/LoginPage";
import Navbar from "../../e2e/PageObjectModels/Navbar";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { stringToMaybeBoolean } from "@badeball/cypress-cucumber-preprocessor/lib/preprocessor-configuration";
import CartPage from "../../e2e/PageObjectModels/CartPage";
import MenuPage from "../../e2e/PageObjectModels/MenuPage";

const menuPage = new MenuPage();
const navbar = new Navbar();

When("I add product to cart", () => {
  menuPage.getFirstProduct().click();
});

Then("I should see number of items increased in the navbar.", () => {
  navbar.getCartCount().contains("1").should("be.visible");
});
