import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { ErrorOutline, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormError, FormLoading, FormWrapper } from 'components/Form'
import { resetValidate } from 'utils/validations'

const FormResetPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState({})
  const [values, setValues] = useState({ password: '', confirmPassword: '' })
  const [loading, setLoading] = useState(false)
  const { query } = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)

    const errors = resetValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    // send a post to /forgot-password to send an email
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: query.code,
          password: values.password,
          passwordConfirmation: values.confirmPassword
        })
      }
    )

    const data = await response.json()

    if (data.error) {
      setLoading(false)
      setFormError(data.message[0].messages[0].message)
    } else {
      signIn('credentials', {
        email: data.user.email,
        password: values.password,
        callbackUrl: '/'
      })
    }
  }

  const handleInput = (field, value) =>
    setValues((s) => ({ ...s, [field]: value }))

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          error={fieldError?.confirmPassword}
          onInputChange={(v) => handleInput('confirmPassword', v)}
          icon={<Lock />}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Reset Password</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword
