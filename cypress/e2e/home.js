/* eslint-disable cypress/no-unnecessary-waiting */
describe('Home Page', () =>
  it('should render home section', () => {
    cy.visit('/')

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
  }))
