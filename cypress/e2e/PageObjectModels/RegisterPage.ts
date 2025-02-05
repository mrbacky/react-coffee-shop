class RegisterPage {
  getFirstNameField() {
    return cy.get("#first-name");
  }

  getLastNameField() {
    return cy.get("#last-name");
  }

  getEmailField() {
    return cy.get("#email");
  }

  getPasswordField() {
    return cy.get("#password");
  }

  getCreateAccountButton() {
    return cy.get("#create-new-account-confirm-button");
  }
}

export default RegisterPage;
