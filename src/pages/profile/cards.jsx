import Profile from 'templates/Profile'
import CardsList from 'components/CardsList'

import cardsMock from 'components/PaymentOptions/mock'

const Cards = (props) => (
  <Profile>
    <CardsList {...props} />
  </Profile>
)

export function getServerSideProps() {
  return {
    props: {
      cards: cardsMock
    }
  }
}

export default Cards
