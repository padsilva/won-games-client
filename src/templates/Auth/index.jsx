import PropTypes from 'prop-types'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Auth = ({ title, children }) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Logo id="banner" />

        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform.
          </S.Subtitle>
        </div>

        <S.Footer>Won Games 2020 © All rights reserved.</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Logo id="content" color="black" size="large" />
        <Heading color="black" lineLeft lineColor="secondary">
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

Auth.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
}

export default Auth