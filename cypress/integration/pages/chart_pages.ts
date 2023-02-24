import { Assertion } from "chai"

export class ChartPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    btn_checkout = '#checkout'
    btn_continue_shopping = '#continue-shopping'
    btn_remove = '#remove-sauce-labs-backpack'
    inventory_item_price = '.inventory_item_price'
    cart_quantity = '.cart_quantity'

    sauceLabsBackpack(){
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    clickCheckoutbtn(){
        cy.get(this.btn_checkout).click()
    }
    assertionItemPrice(){
        cy.get(this.inventory_item_price).should('have.text', '$29.99')
    }
    assertionCartQuantity(){
        cy.get(this.cart_quantity).should('have.text', '1')
    }
}