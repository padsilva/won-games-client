import PropTypes from 'prop-types'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'

import * as S from './styles'

const Profile = ({ children }) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        My Account
      </Heading>

      <S.Main>
        <ProfileMenu />
        <S.Content>{children}</S.Content>
      </S.Main>
    </Container>
  </Base>
)

Profile.propTypes = {
  children: PropTypes.node.isRequired
}

export default Profile
