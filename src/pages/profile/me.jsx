import Profile from 'templates/Profile'
import FormProfile from 'components/FormProfile'
import protectedRoutes from 'utils/protectedRoutes'

const Me = () => (
  <Profile>
    <FormProfile />
  </Profile>
)

export const getServerSideProps = async (context) => {
  const session = await protectedRoutes(context)

  return {
    props: { session }
  }
}

export default Me
