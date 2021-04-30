import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

import Button from 'components/Button'

import * as S from './styles'

const Empty = ({ title, description, hasLink }) => (
  <S.Wrapper>
    <Image
      src="/img/empty.svg"
      alt="A gamer in a couch playing videogame"
      width={380}
      height={285}
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
