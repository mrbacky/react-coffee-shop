class Navbar {
  getLogOutButton() {
    return cy.xpath('//*[@id="__next"]/header/nav/ul/li[4]/a');
  }

  getSignInButton() {
    return cy.get("#sign-in-button");
  }
}

export default Navbar;
