import Link from 'next/link'
import { Email, Lock } from 'styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign In
      </Button>

      <S.SignUpLink>
        Don&apos;t have an account?{' '}
        <Link href="/sign-up">
          <a>Sign Up</a>
        </Link>
      </S.SignUpLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
