class LoginPage {
  getEmailInput() {
    return cy.get("#email");
  }

  getPasswordInput() {
    return cy.get("#password");
  }

  getLogInButton() {
    //button[normalize-space()='Sign In']
    // return cy.get('button[id="sign-in-button"]');

    // 'button[id="category"]'

    return cy.xpath(
      "/html/body/div[3]/main/div[2]/div/div/form/div[3]/button[1]"
    );
  }

  getCreateNewAccountButton() {
    return cy.xpath('//*[@id="sign-in"]/div[3]/button[2]');
  }
}

export default LoginPage;
