import PropTypes from 'prop-types'
import { useState } from 'react'
import * as S from './styles'

const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

Checkbox.propTypes = {
  onCheck: PropTypes.func,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  labelFor: PropTypes.string,
  labelColor: PropTypes.oneOf(['white', 'black']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Checkbox
