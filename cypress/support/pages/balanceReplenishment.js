export class BalanceReplenishment {

    open(url){
        cy.visit(url)
    }

    clickPaymentByCartOrSPB(){
        cy.get('button.payment-block-variant.unstyled-button').click()
    }

    clickContinueBySite(){
        cy.get('button.btn.web-to-app-payment-dialog__btn-continue').click()
    }
}

export const balanceReplenishment = new BalanceReplenishment()