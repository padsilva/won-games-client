import PropTypes from 'prop-types'

import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as S from './styles'

const Base = ({ children }) => (
  <section>
    <Container>
      <Menu />
    </Container>

    {children}

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

Base.propTypes = {
  children: PropTypes.node.isRequired
}

export default Base
