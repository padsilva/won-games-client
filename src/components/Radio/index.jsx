import PropTypes from 'prop-types'
import * as S from './styles'

const Radio = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        onChange={onChange}
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

Radio.propTypes = {
  onCheck: PropTypes.func,
  label: PropTypes.string,
  labelFor: PropTypes.string,
  labelColor: PropTypes.oneOf(['white', 'black']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Radio
