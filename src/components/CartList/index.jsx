import PropTypes from 'prop-types'
import Link from 'next/link'

import Button from 'components/Button'
import GameItem from 'components/GameItem'

import * as S from './styles'

const CartList = ({ items, total, hasButton = false }) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}

    <S.Footer>
      {!hasButton && <span>Total:</span>}
      <S.Total>{total}</S.Total>
      {hasButton && (
        <Link href="/cart">
          <Button as="a">Buy now</Button>
        </Link>
      )}
    </S.Footer>
  </S.Wrapper>
)

CartList.propTypes = {
  items: PropTypes.arrayOf(GameItem).isRequired,
  total: PropTypes.string.isRequired,
  hasButton: PropTypes.bool
}

export default CartList
