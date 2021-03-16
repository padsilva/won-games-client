import OrdersList from 'components/OrdersList'
import Profile from 'templates/Profile'
import itemsMock from 'components/OrdersList/mock'
import protectedRoutes from 'utils/protectedRoutes'

const Orders = (props) => (
  <Profile>
    <OrdersList {...props} />
  </Profile>
)

export const getServerSideProps = async (context) => {
  const session = await protectedRoutes(context)

  return {
    props: {
      items: itemsMock,
      session
    }
  }
}

export default Orders
