import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signOut } from 'next-auth/client'
import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

import * as S from './styles'

const ProfileMenu = ({ activeLink }) => {
  const { push } = useRouter()

  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link isActive={activeLink === '/profile/me'} title="Profile">
          <AccountCircle size={24} />
          <span>Profile</span>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref>
        <S.Link isActive={activeLink === '/profile/orders'} title="Orders">
          <FormatListBulleted size={24} />
          <span>Orders</span>
        </S.Link>
      </Link>

      <S.Link
        role="button"
        onClick={async () => {
          const data = await signOut({ redirect: false, callbackUrl: '/' })
          push(data.url)
        }}
        title="Sign out"
      >
        <ExitToApp size={24} title="Sign out" />
        <span>Sign out</span>
      </S.Link>
    </S.Nav>
  )
}

ProfileMenu.propTypes = {
  activeLink: PropTypes.oneOf(['/profile/me', '/profile/orders'])
}

export default ProfileMenu
