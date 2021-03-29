import userEvent from '@testing-library/user-event'
import { signIn } from 'next-auth/client'
import 'server.mock'
import { waitFor } from 'utils/test-utils'
import { render, screen } from 'utils/test-utils'

import FormResetPassword from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

jest.mock('next-auth/client', () => ({
  signIn: jest.fn()
}))

describe('<FormResetPassword />', () => {
  it('should render the form', () => {
    render(<FormResetPassword />)

    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /reset password/i })
    ).toBeInTheDocument()
  })

  it('should validate if the passwords match', async () => {
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText('Password'), '12345')

    await userEvent.type(
      screen.getByPlaceholderText(/confirm password/i),
      '54321'
    )

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    expect(
      await screen.findByText(/confirm password does not match with password/i)
    ).toBeInTheDocument()
  })

  it('should show error when code provided is wrong', async () => {
    query = { code: 'wrong_code' }
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText('Password'), '12345')

    await userEvent.type(
      screen.getByPlaceholderText(/confirm password/i),
      '12345'
    )

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    expect(
      await screen.findByText(/Incorrect code provided/i)
    ).toBeInTheDocument()
  })

  it('should reset the password and sign in the user', async () => {
    query = { code: 'right_code' }

    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText('Password'), '12345')

    await userEvent.type(
      screen.getByPlaceholderText(/confirm password/i),
      '12345'
    )

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    await waitFor(() =>
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'valid@email.com',
        password: '12345',
        callbackUrl: '/'
      })
    )
  })
})
