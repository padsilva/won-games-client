import PropTypes from 'prop-types'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import CartList from 'components/CartList'
import PaymentForm from 'components/PaymentForm'
import { Divider } from 'components/Divider'
import Showcase from 'components/Showcase'

import * as S from './styles'

const Cart = ({ recommendedTitle, recommendedGames, recommendedHighlight }) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        My Cart
      </Heading>

      <S.Content>
        <CartList />

        <PaymentForm />
      </S.Content>

      <Divider />
    </Container>

    <Showcase
      title={recommendedTitle}
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

Cart.propTypes = {
  recommendedTitle: PropTypes.string.isRequired,
  recommendedGames: PropTypes.array.isRequired,
  recommendedHighlight: PropTypes.object.isRequired
}

export default Cart
