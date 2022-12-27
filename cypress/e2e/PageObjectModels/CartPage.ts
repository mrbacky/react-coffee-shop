class CartPage {
    getClearCartButton(){
        return cy.xpath('/html/body/div[2]/div[2]/div/div[2]/button[1]')
    }

    getCloseButton(){
        return cy.xpath('/html/body/div[2]/div[2]/div/div[2]/button[2]')
    }

    getOrderButton(){
        return cy.xpath('/html/body/div[2]/div[2]/div/div[2]/button[3]')
    }

    getFirstCartItem(){
        return cy.xpath('/html/body/div[2]/div[2]/div/ul').find('li').eq(0)
    }

    getFirstCartItemAmount(){
        return cy.xpath('//*[@id="overlays"]/div[2]/div/ul/li[1]/div[1]/div/span[2]')
    }

    getFirstCartItemRemoveButton(){
        return cy.xpath('//*[@id="overlays"]/div[2]/div/ul/li[1]/div[2]/button[1]')
    }

    getFirstCartItemDecreaseAmountButton(){
        return cy.xpath('//*[@id="overlays"]/div[2]/div/ul/li[1]/div[2]/button[2]')
    }

    getFirstCartItemIncreaseAmountButton(){
        return cy.xpath('//*[@id="overlays"]/div[2]/div/ul/li[1]/div[2]/button[3]')
    }

    getConfirmContinueAsGuestButton(){
        return cy.xpath('//*[@id="overlays"]/div[2]/div/div[2]/div/button[1]')
    }

    getFirstNameInput(){
        return cy.get('#first-name')
    }

    getLastNameInput(){
        return cy.get('#last-name')
    }

    getEmailInput(){
        return cy.get('#email')
    }

    getConfirmOrderButton(){
        return cy.xpath('/html/body/div[2]/div[2]/div/form').contains('Confirm')
    }
}
export default CartPage