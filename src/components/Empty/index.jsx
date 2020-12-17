import Link from 'next/link'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import * as S from './styles'

const Empty = ({ title, description, hasLink }) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="a gamer in a couch playing a videogame"
      role="image"
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

Empty.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasLink: PropTypes.bool
}

export default Empty
