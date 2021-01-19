import PropTypes from 'prop-types'

import GameItem from 'components/GameItem'
import Dropdown from 'components/Dropdown'
import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'

import * as S from './styles'

const CartDropdown = ({ items, total }) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items.length} />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

CartDropdown.propTypes = {
  items: PropTypes.arrayOf(GameItem).isRequired,
  total: PropTypes.string.isRequired,
  hasButton: PropTypes.bool
}

export default CartDropdown
