/* eslint-disable cypress/no-unnecessary-waiting */
describe('Home Page', () =>
  it('should render home section', () => {
    cy.visit('/')

    cy.shouldRenderBanner()
  }))
