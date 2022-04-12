/// <reference types="Cypress"/>

import { balanceReplenishment } from "../support/pages/balanceReplenishment"
import { mobilePhoneReplenishment } from "../support/pages/mobileReplenishment"

it('Replenishment of mobile phone number by card', () => {
    balanceReplenishment.open('https://msk.tele2.ru/payments/refill')
    balanceReplenishment.clickPaymentByCartOrSPB()
    balanceReplenishment.clickContinueBySite()
    cy.wait(3000)
    mobilePhoneReplenishment.typePhoneNumber('3456789012')
    mobilePhoneReplenishment.typeAmount('100')
    mobilePhoneReplenishment.typeCreditCard('4552331448138217', '0524', '123')
    mobilePhoneReplenishment.typeEmail('test@test.test')
    cy.wait(2000)
    mobilePhoneReplenishment.clickSubmit()
    mobilePhoneReplenishment.checkErrorMessage('Платеж отклонен банком. Обратитесь в поддержку Tele2')
})

it('Replenishment of mobile phone number by fast pay', () => {
    balanceReplenishment.open('https://msk.tele2.ru/payments/refill')
    balanceReplenishment.clickPaymentByCartOrSPB()
    balanceReplenishment.clickContinueBySite()
    cy.wait(3000)
    mobilePhoneReplenishment.selectFastPay()
    mobilePhoneReplenishment.typePhoneNumber('3456789012')
    mobilePhoneReplenishment.typeAmount('100')
    cy.wait(2000)
    mobilePhoneReplenishment.clickSubmit()
    mobilePhoneReplenishment.checkErrorMessage('Проверка reCaptcha не пройдена. Воспользуйтесь другим способом оплаты')
})