import PropTypes from 'prop-types'
import Link from 'next/link'
import { Done } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import Showcase from 'components/Showcase'

import * as S from './styles'

const Success = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}) => (
  <Base>
    <Container>
      <S.Wrapper>
        <S.Heading>Your purchase was successful!</S.Heading>

        <S.CheckMark>
          <Done />
        </S.CheckMark>

        <S.Text>
          Wait for your payment details by email. Your game is now available for
          download inside your{' '}
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

Success.propTypes = {
  recommendedTitle: PropTypes.string.isRequired,
  recommendedGames: PropTypes.array.isRequired,
  recommendedHighlight: PropTypes.object.isRequired
}

export default Success
