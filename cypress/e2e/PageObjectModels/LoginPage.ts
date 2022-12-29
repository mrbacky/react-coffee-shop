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
    return cy.xpath('//*[@id="sign-in"]/div[3]/button[2]');
  }
}

export default LoginPage;
