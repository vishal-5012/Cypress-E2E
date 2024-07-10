export class homePage{
    webLocators={
        searchbox:'input[placeholder="Search"]',
        searchButton:'.btn.btn-default.btn-lg',
        product:'[title="MacBook"]',
        addToCart:'Add to Cart',
        successMessage:'.alert-success'
    }

    searchProduct(productName){
        cy.get(this.webLocators.searchbox).type(productName)
        cy.get(this.webLocators.searchButton).click()
    }

    addToCart(){
        cy.contains(this.webLocators.addToCart).click()
    }

    checkMessage(){
        return cy.get(this.webLocators.successMessage)
    }
}