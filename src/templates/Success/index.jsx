import PropTypes from 'prop-types'
import { Done } from '@styled-icons/material-outlined/Done'
import Link from 'next/link'
import { useEffect } from 'react'

import Base from 'templates/Base'

import { Container } from 'components/Container'
import Showcase from 'components/Showcase'

import * as S from './styles'
import { useCart } from 'hooks/use-cart'

const Success = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}) => {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Heading>Your purchase was successful!</S.Heading>

          <S.CheckMark>
            <Done />
          </S.CheckMark>

          <S.Text>
            Wait for your payment details by email. Your game is now available
            for download inside your{' '}
            <Link href="/profile/orders">
              <a>Orders List</a>
            </Link>
            . Enjoy!
          </S.Text>
        </S.Wrapper>
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

Success.propTypes = {
  recommendedTitle: PropTypes.string.isRequired,
  recommendedGames: PropTypes.array.isRequired,
  recommendedHighlight: PropTypes.object.isRequired
}

export default Success
