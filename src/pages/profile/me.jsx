import Profile from 'templates/Profile'
import FormProfile from 'components/FormProfile'
import protectedRoutes from 'utils/protectedRoutes'
import { initializeApollo } from 'utils/apollo'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'

const Me = (props) => (
  <Profile>
    <FormProfile {...props} />
  </Profile>
)

export const getServerSideProps = async (context) => {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  // get game data
  const { data } = await apolloClient.query({
    query: QUERY_PROFILE_ME
  })

  return {
    props: { session, username: data.me?.username, email: data.me?.email }
  }
}

export default Me
