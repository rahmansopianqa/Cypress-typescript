export class CheckoutOverviewPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    summary_info = '.summary_info'
    summary_subtotal = '.summary_subtotal_label'
    summary_tax = '.summary_tax_label'
    summary_total = '.summary_total_label'
    btn_cancel = '#cancel'
    btn_finish = '#finish'

    sauceLabsBackpack(){
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    
    assertOverview(){
        cy.get(this.summary_info).should('be.visible') 
        cy.get(this.summary_subtotal).should('be.visible')
        cy.get(this.summary_subtotal).should('have.text','Item total: $29.99') 
        cy.get(this.summary_tax).should('be.visible')
        cy.get(this.summary_tax).should('have.text','Tax: $2.40')
        cy.get(this.summary_total).should('be.visible')
        cy.get(this.summary_total).should('have.text','Total: $32.39')
    }
    
    clickFinishbtn(){
        cy.get(this.btn_finish).click()
    }
}   