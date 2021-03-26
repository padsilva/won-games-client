import {
  forgotValidate,
  resetValidate,
  signInValidate,
  signUpValidate
} from '.'

describe('validations', () => {
  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' }

      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })

    it('should return invalid email error', () => {
      const values = { email: 'invalid', password: '12345' }

      expect(signInValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })

  describe('signUpValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        username: '',
        email: '',
        password: ''
      }

      expect(signUpValidate(values)).toMatchObject({
        username: expect.any(String),
        email: expect.any(String),
        password: expect.any(String),
        confirmPassword: expect.any(String)
      })
    })

    it('should return short username error', () => {
      const values = {
        username: 'hi',
        email: '',
        password: ''
      }

      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" length must be at least 5 characters long"`
      )
    })

    it('should return invalid email error', () => {
      const values = {
        username: 'padsilva',
        email: 'aaaaaaa',
        password: ''
      }

      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })

    it('should return error if password does not match with confirm password', () => {
      const values = {
        username: 'padsilva',
        email: 'email@email.pt',
        password: 'ddddd',
        confirmPassword: '12345'
      }

      expect(signUpValidate(values).confirmPassword).toMatchInlineSnapshot(
        `"confirm password does not match with password"`
      )
    })
  })

  describe('forgotValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '' }

      expect(forgotValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty'
      })
    })

    it('should return invalid email error', () => {
      const values = { email: 'invalid' }
      expect(forgotValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })

  describe('resetValidate()', () => {
    it('should validate empty fields', () => {
      const values = { password: '', confirmPassword: '' }

      expect(resetValidate(values)).toMatchObject({
        password: '"password" is not allowed to be empty'
      })
    })

    it('should validate confirm password when empty', () => {
      const values = { password: '12345', confirmPassword: '' }

      expect(resetValidate(values).confirmPassword).toMatchInlineSnapshot(
        `"\\"confirmPassword\\" is not allowed to be empty"`
      )
    })

    it('should return invalid password when different', () => {
      const values = { password: '12345', confirmPassword: '1234' }

      expect(resetValidate(values).confirmPassword).toMatchInlineSnapshot(
        `"confirm password does not match with password"`
      )
    })
  })
})
