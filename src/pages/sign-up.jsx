import TextField from 'components/TextField'
import Auth from 'templates/Auth'

const SignUp = () => (
  <Auth title="Sign Up">
    <TextField />
  </Auth>
)

export default SignUp

//   onInput: PropTypes.func,
//   label: PropTypes.string,
//   labelFor: PropTypes.string,
//   initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   icon: PropTypes.element,
//   iconPosition: PropTypes.oneOf(['left', 'right']),
//   disabled: PropTypes.bool,
//   error: PropTypes.string
