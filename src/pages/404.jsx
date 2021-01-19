import Base from 'templates/Base'
import { Container } from 'components/Container'
import Empty from 'components/Empty'

const Page404 = () => (
  <Base>
    <Container>
      <Empty
        title="404: Not found"
        description="Ops... this page does not exist"
        hasLink
      />
    </Container>
  </Base>
)

export default Page404
