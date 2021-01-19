import PropTypes from 'prop-types'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import CartList from 'components/CartList'
import PaymentOptions from 'components/PaymentOptions'
import Empty from 'components/Empty'
import { Divider } from 'components/Divider'
import Showcase from 'components/Showcase'

import * as S from './styles'

const Cart = ({
  items,
  total,
  cards,
  recommendedGames,
  recommendedHighlight
}) => {
  const handlePayment = () => {}

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        {items?.length > 0 ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty."
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title="Recommended"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  recommendedGames: PropTypes.array.isRequired,
  recommendedHighlight: PropTypes.object.isRequired
}

export default Cart
