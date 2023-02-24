export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    shopping_cart_link = '.shopping_cart_link'
    shopping_cart_badge = '.shopping_cart_badge'
    add_sauce_labs_backpack = '#add-to-cart-sauce-labs-backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    clickShoppingChart(){
        cy.get(this.shopping_cart_link).click()

    }
    addSauceLabsBackpack(){ 
        cy.get(this.add_sauce_labs_backpack).click()
    }
    assertionCartBadge(){ 
        cy.get(this.shopping_cart_badge).should('have.text','1')
    }
}