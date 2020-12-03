import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import PropTypes from 'prop-types'
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from 'styled-icons/material-outlined'

import * as S from './styles'

const GameCard = ({
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

    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>

    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>

      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

GameCard.propTypes = {
  title: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  promotionalPrice: PropTypes.string,
  favorite: PropTypes.bool,
  onFav: PropTypes.func,
  ribbon: PropTypes.node,
  ribbonColor: PropTypes.oneOf(['primary', 'secondary']),
  ribbonSize: PropTypes.oneOf(['normal', 'small'])
}

export default GameCard
