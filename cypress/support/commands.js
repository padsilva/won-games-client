/* eslint-disable cypress/no-unnecessary-waiting */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Add Testing Library Commands
import '@testing-library/cypress/add-commands'
import 'cypress-plugin-stripe-elements'

Cypress.Commands.add('google', () => cy.visit('https://www.google.pt'))

Cypress.Commands.add('getByDataCy', (selector, ...args) =>
  cy.get(`[data-cy="${selector}"]`, ...args)
)

Cypress.Commands.add('getFields', (fields) => {
  fields.map(({ label }) => {
    cy.findByText(label).should('exist')
  })
})

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: /cyberpunk 2077/i })
    cy.findByRole('link', { name: /buy now/i })

    cy.get('.slick-dots > :nth-child(2) > button').click()
    cy.wait(500)

    cy.findByRole('heading', {
      name: /Heroes of Might and Magic® 3: Complete/i
    })
    cy.findByRole('link', { name: /buy now/i })
  })
})

Cypress.Commands.add('shouldRenderShowcase', ({ name, highlight = false }) => {
  cy.getByDataCy(name).within(() => {
    cy.findByRole('heading', { name }).should('exist')

    cy.getByDataCy('highlight').should(highlight ? 'exist' : 'not.exist')

    if (highlight) {
      cy.getByDataCy('highlight').within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }

    cy.getByDataCy('game-card').should('have.length.gt', 0)
  })
})

Cypress.Commands.add('shouldBeLessThan', (value) => {
  cy.findByText(/€\d+(\.\d{1,2})?/)
    .invoke('text')
    .then(($el) => $el.replace('€', ''))
    .then(parseFloat)
    .should('be.lt', value)
})

Cypress.Commands.add('shouldBeGreaterThan', (value) => {
  cy.findByText(/€\d+(\.\d{1,2})?/)
    .invoke('text')
    .then(($el) => $el.replace('€', ''))
    .then(parseFloat)
    .should('be.gt', value)
})

Cypress.Commands.add('signUp', (user) => {
  cy.findByPlaceholderText(/username/i).type(user.username)
  cy.findByPlaceholderText(/email/i).type(user.email)
  cy.findByPlaceholderText(/^password/i).type(user.password)
  cy.findByPlaceholderText(/confirm password/i).type(user.password)
  cy.findByRole('button', { name: /sign up/i }).click()
})

Cypress.Commands.add(
  'signIn',
  (email = 'e2e@wongames.com', password = '123456') => {
    cy.findByPlaceholderText(/email/i).type(email)
    cy.findByPlaceholderText(/password/i).type(password)
    cy.findByRole('button', { name: /sign in/i }).click()
  }
)

Cypress.Commands.add('addToCartByIndex', (index) => {
  cy.getByDataCy('game-card')
    .eq(index)
    .within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })
})

Cypress.Commands.add('removeFromCartByIndex', (index) => {
  cy.getByDataCy('game-card')
    .eq(index)
    .within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })
})
