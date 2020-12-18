import { Download } from '@styled-icons/boxicons-solid'
import PropTypes from 'prop-types'

import * as S from './styles'

const GameItem = ({ img, title, price, downloadLink, paymentInfo }) => (
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
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>
    {!!paymentInfo && (
      <S.PaymentContent>
        <div>{paymentInfo.purchaseDate}</div>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          <img src={paymentInfo.img} alt={paymentInfo.flag} />
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
)

GameItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  downloadLink: PropTypes.string,
  paymentInfo: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    purchaseDate: PropTypes.string.isRequired
  })
}

export default GameItem
