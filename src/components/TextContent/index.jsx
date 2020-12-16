import PropTypes from 'prop-types'

import Heading from 'components/Heading'
import * as S from './styles'

const TextContent = ({ title, content }) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

TextContent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired
}

export default TextContent
