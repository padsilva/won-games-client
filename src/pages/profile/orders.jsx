import OrdersList from 'components/OrdersList'
import Profile from 'templates/Profile'

import itemsMock from 'components/OrdersList/mock'

const Orders = (props) => (
  <Profile>
    <OrdersList {...props} />
  </Profile>
)

export const getServerSideProps = async () => ({
  props: {
    items: itemsMock
  }
})

export default Orders
