import TextField from 'components/TextField'
import Auth from 'templates/Auth'

const SignIn = () => (
  <Auth title="Sign In">
    <TextField />
  </Auth>
)

export default SignIn

//   onInput: PropTypes.func,
//   label: PropTypes.string,
//   labelFor: PropTypes.string,
//   initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   icon: PropTypes.element,
//   iconPosition: PropTypes.oneOf(['left', 'right']),
//   disabled: PropTypes.bool,
//   error: PropTypes.string
