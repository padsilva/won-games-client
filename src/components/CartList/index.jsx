import GameItem from 'components/GameItem'
import PropTypes from 'prop-types'

import * as S from './styles'

const CartList = ({ items, total }) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}

    <S.Footer>
      Total <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
)

CartList.propTypes = {
  items: PropTypes.arrayOf(GameItem).isRequired,
  total: PropTypes.string.isRequired
}

export default CartList
