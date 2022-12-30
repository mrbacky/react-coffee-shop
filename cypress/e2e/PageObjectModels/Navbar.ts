class Navbar {
  getLogOutButton() {
    return cy.xpath('//*[@id="__next"]/header/nav/ul/li[4]/a');
  }

  getSignInButton() {
    return cy.get("#sign-in-navbar-button");
  }

  getCartButton() {
    return cy.get("#cart-navbar-button");
  }

  getCartCount() {
    return cy.get("#cart-navbar-count");
  }
}

export default Navbar;
