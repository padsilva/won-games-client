import { useState } from 'react'
import Link from 'next/link'
import { useMutation } from '@apollo/client'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

const FormSignUp = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [createUser] = useMutation(MUTATION_REGISTER)

  const handleSubmit = async (event) => {
    event.preventDefault()

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  const handleInput = (field, value) =>
    setValues((s) => ({ ...s, [field]: value }))

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          onInputChange={(v) => handleInput('username', v)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm Password"
          type="password"
          onInputChange={(v) => handleInput('confirm-password', v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth>
          Sign Up
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign In</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
