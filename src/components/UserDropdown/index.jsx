import PropTypes from 'prop-types'
import { ChevronDown } from '@styled-icons/boxicons-solid'
import {
  AccountCircle,
  ExitToApp,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Link from 'next/link'

import Dropdown from 'components/Dropdown'

import * as S from './styles'

const UserDropdown = ({ username }) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link title="Profile">
          <AccountCircle size={24} />
          <span>Profile</span>
        </S.Link>
      </Link>

      <Link href="/wishlist" passHref>
        <S.Link title="Wishlist">
          <FavoriteBorder size={24} />
          <span>Wishlist</span>
        </S.Link>
      </Link>

      <Link href="/logout" passHref>
        <S.Link title="Sign out">
          <ExitToApp size={24} />
          <span>Sign out</span>
        </S.Link>
      </Link>
    </S.Nav>
  </Dropdown>
)

UserDropdown.propTypes = {
  username: PropTypes.string.isRequired
}

export default UserDropdown
