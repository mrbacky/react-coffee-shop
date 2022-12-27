class Navbar {
    getLogOutButton(){
        return cy.get('//*[@id="__next"]/header/nav/ul/li[4]/a')
    }
}

export default Navbar