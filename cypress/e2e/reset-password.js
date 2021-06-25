describe('Reset Password', () => {
  it('should show error if password does not match', () => {
    cy.visit('/reset-password?code=123456789')

    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/confirm password/i).type('321')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findAllByText(/confirm password does not match with password/i).should(
      'exist'
    )
  })

  it('should show error if code is not valid', () => {
    cy.intercept('POST', '**/auth/reset-password', (res) => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [{ messages: [{ message: 'Incorrect code provided.' }] }]
        }
      })
    })

    cy.visit('/reset-password?code=123456789')

    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findAllByText(/incorrect code provided/i).should('exist')
  })

  it.only('should fill the input and redirect to the home page with the user signed in', () => {
    cy.intercept('POST', '**/auth/reset-password', (res) => {
      res.reply({
        status: 200,
        body: { user: { email: 'cypress@email.com' } }
      })
    })

    cy.intercept('POST', '**/auth/callback/credentials*', (res) => {
      res.reply({
        status: 200,
        body: { user: { email: 'cypress@email.com' } }
      })
    })

    cy.intercept('GET', '**/auth/session*', (res) => {
      res.reply({
        status: 200,
        body: { user: { name: 'cypress', email: 'cypress@email.com' } }
      })
    })

    cy.visit('/reset-password?code=123456789')

    cy.findAllByPlaceholderText(/^password/i).type('123456')
    cy.findAllByPlaceholderText(/confirm password/i).type('123456')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
  })
})
