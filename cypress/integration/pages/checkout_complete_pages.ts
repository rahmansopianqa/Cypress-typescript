export class CheckoutCompletePage{
    complete_header = '.complete-header'

    assertionComplete(){
        cy.get(this.complete_header).should('have.text','THANK YOU FOR YOUR ORDER')
    }
}