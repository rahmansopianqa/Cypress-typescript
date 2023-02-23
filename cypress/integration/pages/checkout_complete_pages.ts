export class CheckoutCompletePage{
    complete_header = '.complete-header'

    assertionComplete(){
        cy.get(this.complete_header).contains('THANK YOU FOR YOUR ORDER')
    }
}