import { registerPage } from "../../Pages/registerPage"
const regObj=new registerPage()
import registerData from "../../fixtures/registerData.json"

describe('test Automation',()=>{

    it('Register Flow',()=>{

        regObj.openURL()
        regObj.enterFirstName(registerData.firstName)
        regObj.enterLastName(registerData.lastName)
        regObj.enterEmail(registerData.email)
        regObj.enterTelephone(registerData.telephone)
        regObj.enterPassword(registerData.password)
        regObj.policyCheckbox()
        regObj.clickContinue()

    }) 
})