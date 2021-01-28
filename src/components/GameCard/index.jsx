import PropTypes from 'prop-types'
import Link from 'next/link'
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import { formatPrice } from 'utils/formatPrice'

import * as S from './styles'

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor,
  ribbonSize
}) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <Link href={`/game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>

      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

GameCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  promotionalPrice: PropTypes.number,
  favorite: PropTypes.bool,
  onFav: PropTypes.func,
  ribbon: PropTypes.node,
  ribbonColor: PropTypes.oneOf(['primary', 'secondary']),
  ribbonSize: PropTypes.oneOf(['normal', 'small'])
}

export default GameCard
