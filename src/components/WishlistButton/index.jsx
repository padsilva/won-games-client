import PropTypes from 'prop-types'
import { useSession } from 'next-auth/client'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import { useWishlist } from 'hooks/use-wishlist'

const WishlistButton = ({ id, hasText, size = 'small' }) => {
  const [session] = useSession()
  const {
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    loading: loadingApollo
  } = useWishlist()

  const ButtonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  const handleClick = () =>
    isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)

  return !session ? null : (
    <Button
      icon={
        isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal
      size={size}
      onClick={handleClick}
      disabled={loadingApollo}
      style={{ filter: 'none' }}
    >
      {hasText && ButtonText}
    </Button>
  )
}

WishlistButton.propTypes = {
  id: PropTypes.string.isRequired,
  hasText: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default WishlistButton
