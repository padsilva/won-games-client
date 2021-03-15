import PropTypes from 'prop-types'
import Link from 'next/link'
import { signOut } from 'next-auth/client'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

import * as S from './styles'

const ProfileMenu = ({ activeLink }) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="Profile">
        <AccountCircle size={24} />
        <span>Profile</span>
      </S.Link>
    </Link>

    <Link href="/profile/cards" passHref>
      <S.Link isActive={activeLink === '/profile/cards'} title="Cards">
        <CreditCard size={24} />
        <span>Cards</span>
      </S.Link>
    </Link>

    <Link href="/profile/orders" passHref>
      <S.Link isActive={activeLink === '/profile/orders'} title="Orders">
        <FormatListBulleted size={24} />
        <span>Orders</span>
      </S.Link>
    </Link>

    <S.Link role="button" onClick={() => signOut()} title="Sign out">
      <ExitToApp size={24} />
      <span>Sign out</span>
    </S.Link>
  </S.Nav>
)

ProfileMenu.propTypes = {
  activeLink: PropTypes.oneOf([
    '/profile/me',
    '/profile/cards',
    '/profile/orders'
  ])
}

export default ProfileMenu
