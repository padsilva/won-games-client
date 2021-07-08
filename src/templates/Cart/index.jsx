import PropTypes from 'prop-types'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { Info } from '@styled-icons/material-outlined/Info'

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

      <S.Text>
        <Info size={18} /> Your purchase is protected by a secure connection
        from the WON platform. By purchasing from our store you agree and agree
        to our <a href="#">terms of use.</a> After making the purchase you are
        entitled to a refund within a maximum of 30 days, without any additional
        cost, as long as the download of the purchased game has not occurred
        after your purchase.
      </S.Text>

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
