import OrdersList from 'components/OrdersList'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protectedRoutes'
import { initializeApollo } from 'utils/apollo'
import { QUERY_ORDERS } from 'graphql/queries/orders'
import { ordersMapper } from 'utils/mappers'

const Orders = (props) => (
  <Profile>
    <OrdersList {...props} />
  </Profile>
)

export const getServerSideProps = async (context) => {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query({
    query: QUERY_ORDERS,
    variables: {
      identifier: session?.id
    }
  })

  return {
    props: {
      items: ordersMapper(data.orders),
      session
    }
  }
}

export default Orders
