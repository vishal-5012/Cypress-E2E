import { homePage } from "../../Pages/homePage"
const hPage=new homePage()

import testData from "../../fixtures/testData.json"

describe('Add to cart',()=>{
    before(()=>{
        cy.login(testData.login.email,testData.login.password)
    })

    it('Add macbook to cart',()=>{
        hPage.searchProduct(testData.product.productName)
        hPage.addToCart()
        hPage.checkMessage().should('contain',testData.message.successMessage).and('contain',testData.product.productName)

    })
})