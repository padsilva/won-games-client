import PropTypes from 'prop-types'
import Link from 'next/link'

import Button from 'components/Button'
import GameItem from 'components/GameItem'
import Empty from 'components/Empty'

import * as S from './styles'

const CartList = ({ items = [], total, hasButton = false }) => (
  <S.Wrapper isEmpty={!items.length}>
    {items.length ? (
      <>
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
      </>
    ) : (
      <>
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers"
          hasLink
        />
      </>
    )}
  </S.Wrapper>
)

CartList.propTypes = {
  items: PropTypes.arrayOf(GameItem),
  total: PropTypes.string,
  hasButton: PropTypes.bool
}

export default CartList
