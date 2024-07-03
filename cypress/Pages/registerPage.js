export class registerPage{
    webLocators={

        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'[name="email"]',
        telePhone:'input[name="telephone"]',
        password:'.form-control[id="input-password"]',
        confirmPassword:'#input-confirm',
        checkbox:'input[type="checkbox"]',
        continueButton:'.btn-primary'

    }
    
    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName){
        cy.get(this.webLocators.firstName).type(FName)
    }

    enterLastName(LName){
        cy.get(this.webLocators.lastName).type(LName)
    }

    enterEmail(Email){
        cy.get(this.webLocators.email).type(Email)
    }

    enterTelephone(telePhone){
        cy.get(this.webLocators.telePhone).type(telePhone)
    }

    enterPassword(Password){
        cy.get(this.webLocators.password).type(Password)
        cy.get(this.webLocators.confirmPassword).type(Password)
    }

    policyCheckbox(){
        cy.get(this.webLocators.checkbox).check()
    }

    clickContinue(){
        cy.get(this.webLocators.continueButton).click()
    }
}