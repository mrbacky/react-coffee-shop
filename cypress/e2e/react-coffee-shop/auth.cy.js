import { Chance } from "chance";

describe('User authentication', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth");
  });
  const loginPage = new LoginPage()
  const registerPage = new RegisterPage()
  const chance = new Chance()
  const testEmail = chance.email()

  it('sign up an user', () => {
    loginPage.getCreateNewAccountButton().click()
    registerPage.getFirstNameField().type(chance.first())
    registerPage.getLastNameField().type(chance.last())
    registerPage.getEmailField().type(testEmail)
    registerPage.getPasswordField().type("1234567")
    registerPage.getCreateAccountButton().click()

    cy.contains("Created new user!").should("be.visible");
  });

  it('sign in an user', () => {
    loginPage.getEmailInput().type(testEmail)
    loginPage.getPasswordInput().type("1234567")
    loginPage.getLogInButton().click()
  });
});
