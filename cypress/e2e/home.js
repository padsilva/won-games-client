describe('Home Page', () =>
  it('should render home section', () => {
    cy.visit('/')

    cy.shouldRenderBanner()

    cy.shouldRenderShowcase({ name: 'New' })

    cy.shouldRenderShowcase({ name: 'Most Popular', highlight: true })

    cy.shouldRenderShowcase({ name: 'Upcoming', highlight: true })

    cy.shouldRenderShowcase({ name: 'Free', highlight: true })
  }))
