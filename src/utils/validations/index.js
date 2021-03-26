import Joi from 'joi'

const fieldsValidation = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'confirm password does not match with password'
  })
}

const getFieldErrors = (objError) => {
  const errors = {}

  objError.error &&
    objError.error.details.forEach(
      (err) => (errors[err.path.join('.')] = err.message)
    )

  return errors
}

export const signUpValidate = (values) => {
  const schema = Joi.object(fieldsValidation)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export const signInValidate = (values) => {
  const { email, password } = fieldsValidation
  const schema = Joi.object({ email, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export const forgotValidate = (values) => {
  const { email } = fieldsValidation
  const schema = Joi.object({ email })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export const resetValidate = (values) => {
  const { password, confirmPassword } = fieldsValidation
  const schema = Joi.object({ password, confirmPassword })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
