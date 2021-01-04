import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <>
    <Heading color="black" lineBottom size="small">
      Profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        label="Name"
        placeholder="Name"
        initialValue="John Doe"
      />

      <TextField
        type="email"
        name="email"
        label="Email"
        placeholder="Email"
        initialValue="johndoe@gmail.com"
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

export default FormProfile
