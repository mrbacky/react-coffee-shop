class LoginPage {
    getEmailInput(){
        return cy.get('#email')
    }

    getPasswordInput(){
        return cy.get('#password')
    }

    getLogInButton(){
        return cy.get('/html/body/div[3]/main/div[2]/div/div/form/div[3]/button[1]')
    }

    getCreateNewAccountButton(){
        return cy.get('//*[@id="sign-in"]/div[3]/button[2]')
    }
}

export default LoginPage