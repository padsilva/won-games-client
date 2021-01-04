import Profile from 'templates/Profile'
import CardsList from 'components/CardsList'

import cardsMock from 'components/PaymentOptions/mock'

const Cards = () => (
  <Profile>
    <CardsList cards={cardsMock} />
  </Profile>
)

export default Cards
