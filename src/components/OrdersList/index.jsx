import PropTypes from 'prop-types'

import Heading from 'components/Heading'
import GameItem from 'components/GameItem'
import Empty from 'components/Empty'

import * as S from './styles'

const OrdersList = ({ items = [] }) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      Orders
    </Heading>

    {items.length > 0 ? (
      items.map((order) =>
        order.games.map((game) => (
          <GameItem key={order.id} {...game} paymentInfo={order.paymentInfo} />
        ))
      )
    ) : (
      <Empty
        title="You have no orders yet."
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

OrdersList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      paymentInfo: PropTypes.shape({
        flag: PropTypes.string,
        img: PropTypes.string,
        number: PropTypes.string.isRequired,
        purchaseDate: PropTypes.string.isRequired
      }),
      games: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          downloadLink: PropTypes.string,
          img: PropTypes.string.isRequired,
          price: PropTypes.string.isRequired
        })
      )
    })
  )
}

export default OrdersList
