/* eslint-disable cypress/no-unnecessary-waiting */
import { createUser } from '../support/generate'

describe('Checkout', () => {
  let user
  describe.skip('Free Games', () => {
    before(() => {
      user = createUser()
    })

    it('should buy free games', () => {
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      cy.findByRole('link', { name: /explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      cy.findByText(/free/i).click()
      cy.url().should('contain', 'price_lte=0')

      cy.addToCartByIndex(0)

      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', 1)
        .click()

      cy.getByDataCy('cart-list').within(() => {
        cy.findByText('Buy now').click()
      })

      cy.findByText(/only free games/i).should('exist')

      cy.findByRole('button', { name: /buy now/i }).click()

      cy.wait(6000)

      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      cy.findByRole('heading', {
        name: /Your purchase was successful!/i
      }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.signIn(user.email, user.password)
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/profile/orders`
      )

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })

  describe('Paid Games', () => {
    before(() => {
      user = createUser()
    })

    it('should buy paid games', () => {
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      cy.findByRole('link', { name: /explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      cy.findByText(/highest to lowest/i).click()
      cy.url().should('contain', 'sort=price%3Adesc')

      cy.addToCartByIndex(0)

      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', 1)
        .click()

      cy.getByDataCy('cart-list').within(() => {
        cy.findByText('Buy now').click()
      })

      cy.findByRole('button', { name: /buy now/i }).should(
        'have.attr',
        'disabled'
      )

      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1040')
      cy.fillElementsInput('cardCvc', '103')

      cy.findByRole('button', { name: /buy now/i }).click()

      cy.wait(6000)

      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      cy.findByRole('heading', {
        name: /Your purchase was successful!/i
      }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.signIn(user.email, user.password)
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/profile/orders`
      )

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
})
