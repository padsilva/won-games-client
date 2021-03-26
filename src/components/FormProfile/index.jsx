import PropTypes from 'prop-types'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'
import Link from 'next/link'

const FormProfile = ({ username, email }) => (
  <>
    <Heading color="black" lineBottom size="small">
      Profile
    </Heading>

    <S.Form>
      <TextField
        name="username"
        label="Username"
        placeholder="Username"
        initialValue={username}
      />

      <TextField
        type="email"
        name="email"
        label="Email"
        placeholder="Email"
        initialValue={email}
        disabled
      />

      <S.ButtonContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button minimal size="medium" as="a">
            Reset Password
          </Button>
        </Link>

        <Button size="medium">Save</Button>
      </S.ButtonContainer>
    </S.Form>
  </>
)

FormProfile.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string
}

export default FormProfile
