import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLink, FormLoading, FormWrapper } from 'components/Form'

import * as S from './styles'

const FormSignIn = () => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result.url) {
      return push(result.url)
    }

    setLoading(false)

    console.error('Invalid email or password!')
  }

  const handleInput = (field, value) =>
    setValues((s) => ({ ...s, [field]: value }))

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
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
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign In</span>}
        </Button>

        <FormLink>
          Don&apos;t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign Up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
