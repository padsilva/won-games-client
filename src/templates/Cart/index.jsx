import PropTypes from 'prop-types'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import CartList from 'components/CartList'
import PaymentForm from 'components/PaymentForm'
import { Divider } from 'components/Divider'
import Showcase from 'components/Showcase'

import * as S from './styles'

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const Cart = ({
  session,
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        My Cart
      </Heading>

      <S.Content>
        <CartList />
        <Elements stripe={stripe}>
          <PaymentForm session={session} />
        </Elements>
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
  session: PropTypes.object.isRequired,
  recommendedTitle: PropTypes.string.isRequired,
  recommendedGames: PropTypes.array.isRequired,
  recommendedHighlight: PropTypes.object.isRequired
}

export default Cart
