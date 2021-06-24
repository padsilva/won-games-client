import PropTypes from 'prop-types'
import Link from 'next/link'

import Button from 'components/Button'
import GameItem from 'components/GameItem'
import Empty from 'components/Empty'
import Loader from 'components/Loader'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'

const CartList = ({ hasButton = false }) => {
  const { items, total, loading } = useCart()

  return loading ? (
    <S.Loading>
      <Loader />
    </S.Loading>
  ) : (
    <S.Wrapper isEmpty={!items.length} data-cy="cart-list">
      {items.length ? (
        <>
          <S.GamesList>
            {items.map((item) => (
              <GameItem key={item.title} {...item} />
            ))}
          </S.GamesList>

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
}

CartList.propTypes = {
  hasButton: PropTypes.bool
}

export default CartList
