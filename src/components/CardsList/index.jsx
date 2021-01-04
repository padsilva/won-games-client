import PropTypes from 'prop-types'

import Heading from 'components/Heading'
import * as S from './styles'

const CardsList = ({ cards }) => (
  <>
    <Heading lineBottom color="black" size="small">
      Cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
)

CardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      flag: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  )
}
export default CardsList
