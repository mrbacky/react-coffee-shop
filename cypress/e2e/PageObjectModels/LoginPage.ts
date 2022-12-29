class LoginPage {
  getEmailInput() {
    return cy.get("#email");
  }

  getPasswordInput() {
    return cy.get("#password");
  }

  getLogInButton() {
    return cy.get("#sign-in-confirm-button");
  }

  getCreateNewAccountButton() {
    return cy.get("#create-a-new-account-button");
  }
}

export default LoginPage;
