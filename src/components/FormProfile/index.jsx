import PropTypes from 'prop-types'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

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

      <TextField
        type="password"
        name="password"
        label="Password"
        placeholder="Type your password"
      />

      <TextField
        type="password"
        name="new-password"
        label="New Password"
        placeholder="New password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
)

FormProfile.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string
}

export default FormProfile
