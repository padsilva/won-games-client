import Profile from 'templates/Profile'
import CardsList from 'components/CardsList'
import protectedRoutes from 'utils/protectedRoutes'
import cardsMock from 'components/PaymentOptions/mock'

const Cards = (props) => (
  <Profile>
    <CardsList {...props} />
  </Profile>
)

export const getServerSideProps = async (context) => {
  const session = await protectedRoutes(context)

  return {
    props: {
      cards: cardsMock,
      session
    }
  }
}

export default Cards
