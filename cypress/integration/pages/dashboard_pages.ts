export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    shopping_chart_link = '.shopping_cart_link'
    add_sauce_labs_backpack = '#add-to-cart-sauce-labs-backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    clickShoppingChart(){
        cy.get(this.shopping_chart_link).click()
    }
    addSauceLabsBackpack(){ 
        cy.get(this.add_sauce_labs_backpack).click()
    }
}