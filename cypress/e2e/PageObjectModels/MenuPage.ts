class MenuPage {
  getProduct(name: string) {
    return cy
      .xpath("/html/body/div[3]/main/section/div/ul")
      .contains("li", name);
  }

  getFirstProduct() {
    return cy.contains("+ Add");
  }

  getFirstProductAmountSelect() {
    return cy.xpath(
      "/html/body/div[3]/main/section/div/ul/li[1]/div[3]/form/div/select"
    );
  }

  getFirstProductAddButton() {
    return cy.xpath(
      "/html/body/div[3]/main/section/div/ul/li[1]/div[3]/form/button"
    );
  }
}

export default MenuPage;
