const getIframeDocument = () => {
    return cy
    .get('iframe[src="https://oplata.tele2.ru/#/?amount=0&closeable=true"]')
    .its('0.contentDocument').should('exist')
  }
  
  const getIframeBody = () => {
    return getIframeDocument()
    .its('body').should('not.be.undefined')
    .then(cy.wrap)
  }

export class MobilePhoneReplenishment {

    typePhoneNumber(phoneNumber){
        getIframeBody().find('input[name="msisdn"]').type(phoneNumber)
    }

    typeAmount(amount){
        getIframeBody().find('input[name="amount"]').type(amount, {force: true})
    }

    typeCreditCard(pan, expirationDate, cvv){
        getIframeBody().find('input[name="pan"]').type(pan)
        getIframeBody().find('input[name="expirationDate"]').type(expirationDate)
        getIframeBody().find('input[name="cvv"]').type(cvv)
    }

    typeEmail(email){
        getIframeBody().find('input[name="electronReceiptEmail"]').type(email)
    }

    clickSubmit(){
        getIframeBody().find('button[type="submit"]').click()
    }

    checkErrorMessage(message){
        getIframeBody().find('[data-testid="error_panel"]').should('have.text', message)
    }

    selectFastPay(){
        getIframeBody().find('div').contains('Система быстрых платежей').click()
    }
}

export const mobilePhoneReplenishment = new MobilePhoneReplenishment()