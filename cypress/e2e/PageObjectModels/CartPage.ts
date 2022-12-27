class CartPage {
    getClearCartButton(){
        return cy.get('/html/body/div[2]/div[2]/div/div[2]/button[1]')
    }

    getCloseButton(){
        return cy.get('/html/body/div[2]/div[2]/div/div[2]/button[2]')
    }

    getOrderButton(){
        return cy.get('/html/body/div[2]/div[2]/div/div[2]/button[3]')
    }

    getFirstCartItem(){
        return cy.get('/html/body/div[2]/div[2]/div/ul').find('li').eq(0)
    }

    getFirstCartItemAmount(){
        return cy.get('//*[@id="overlays"]/div[2]/div/ul/li[1]/div[1]/div/span[2]')
    }

    getFirstCartItemRemoveButton(){
        return cy.get('//*[@id="overlays"]/div[2]/div/ul/li[1]/div[2]/button[1]')
    }

    getFirstCartItemDecreaseAmountButton(){
        return cy.get('//*[@id="overlays"]/div[2]/div/ul/li[1]/div[2]/button[2]')
    }

    getFirstCartItemIncreaseAmountButton(){
        return cy.get('//*[@id="overlays"]/div[2]/div/ul/li[1]/div[2]/button[3]')
    }

    getConfirmContinueAsGuestButton(){
        return cy.get('//*[@id="overlays"]/div[2]/div/div[2]/div/button[1]')
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
        return cy.get('/html/body/div[2]/div[2]/div/form').contains('Confirm')
    }
}
export {}