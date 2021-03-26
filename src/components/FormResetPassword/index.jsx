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
  const { push, query } = useRouter()

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

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result.url) {
      return push(result.url)
    }

    setLoading(false)

    setFormError('Passwords did not match!')
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
