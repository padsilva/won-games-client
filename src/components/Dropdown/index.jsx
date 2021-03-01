import PropTypes from 'prop-types'
import { useState } from 'react'
import * as S from './styles'

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>

      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  )
}

Dropdown.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
}

export default Dropdown
