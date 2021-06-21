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

Cypress.Commands.add('google', () => cy.visit('https://www.google.pt'))

Cypress.Commands.add('getByDatCy', (selector, ...args) =>
  cy.get(`[data-cy="${selector}"]`, ...args)
)

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
  cy.getByDatCy(name).within(() => {
    cy.findByRole('heading', { name }).should('exist')

    cy.getByDatCy('highlight').should(highlight ? 'exist' : 'not.exist')

    if (highlight) {
      cy.getByDatCy('highlight').within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }

    cy.getByDatCy('game-card').should('have.length.gt', 0)
  })
})
