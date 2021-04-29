import PropTypes from 'prop-types'
import { Download } from '@styled-icons/boxicons-solid'

import { useCart } from 'hooks/use-cart'

import * as S from './styles'

const GameItem = ({ id, img, title, price, downloadLink, paymentInfo }) => {
  const { isInCart, removeFromCart } = useCart()

  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <img src={img} alt={title} />
        </S.ImageBox>

        <S.Content>
          <S.Title>
            {title}
            {!!downloadLink && (
              <S.DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <Download size={22} />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Group>
            <S.Price>{price}</S.Price>
            {isInCart(id) && (
              <S.Remove onClick={() => removeFromCart(id)}>Remove</S.Remove>
            )}
          </S.Group>
        </S.Content>
      </S.GameContent>
      {!!paymentInfo && (
        <S.PaymentContent>
          <div>{paymentInfo.purchaseDate}</div>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            {!!paymentInfo.img && !!paymentInfo.flag && (
              <img src={paymentInfo.img} alt={paymentInfo.flag} />
            )}
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  )
}

GameItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  downloadLink: PropTypes.string,
  paymentInfo: PropTypes.shape({
    flag: PropTypes.string,
    img: PropTypes.string,
    number: PropTypes.string.isRequired,
    purchaseDate: PropTypes.string.isRequired
  })
}

export default GameItem
