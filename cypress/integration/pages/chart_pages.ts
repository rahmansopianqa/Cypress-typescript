export class ChartPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    btn_checkout = '#checkout'
    btn_continue_shopping = '#continue-shopping'
    btn_remove = '#remove-sauce-labs-backpack'

    sauceLabsBackpack(){
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    clickCheckoutbtn(){
        cy.get(this.btn_checkout).click()
    }
}