class MenuPage {
    getProduct(name: string){
        return cy.get('/html/body/div[3]/main/section/div/ul').contains('li', name)
    }

    getFirstProduct(){
        return cy.get('/html/body/div[3]/main/section/div/ul').find('li').eq(0)
    }

    getFirstProductAmountSelect(){
        return cy.get('/html/body/div[3]/main/section/div/ul/li[1]/div[3]/form/div/select')
    }

    getFirstProductAddButton(){
        return cy.get('/html/body/div[3]/main/section/div/ul/li[1]/div[3]/form/button')
    }
}