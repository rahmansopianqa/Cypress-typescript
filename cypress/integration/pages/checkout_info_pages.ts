import { AssertionError } from "chai"

export class CheckoutInfoPage{
    btn_continue = '#continue'
    btn_cancel = '#cancel'
    txt_firstname = '#first-name'
    txt_lastname = '#last-name'
    txt_postalcode = '#postal-code'
    err_message = '.error-button'

    clickContinueBtn(){
        cy.get(this.btn_continue).click()
    }
    inputFirstname(firstname: string){
        cy.get(this.txt_firstname).type(firstname)
    }
    inputLastname(lastname: string){
        cy.get(this.txt_lastname).type(lastname)
    }
    inputPostalCode(postalcode: string){
        cy.get(this.txt_postalcode).type(postalcode)
    }
    AssertionError(){
        cy.get(this.err_message).should('be.visible') 
    }
    personalInfo(firstname : string,lastname : string , postalcode: string){
        this.inputFirstname(firstname)
        this.inputLastname(lastname)
        this.inputPostalCode(postalcode)
    }
}