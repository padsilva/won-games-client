import PropTypes from 'prop-types'
import { useSession } from 'next-auth/client'

import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as S from './styles'

const Base = ({ children }) => {
  const [session, loading] = useSession()

  return (
    <S.Wrapper>
      <Container>
        <Menu username={session?.user?.name} loading={loading} />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

Base.propTypes = {
  children: PropTypes.node.isRequired
}

export default Base
