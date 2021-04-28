import Success from 'templates/Success'

import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

const SuccessPage = (props) => <Success {...props} />

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_RECOMMENDED
  })

  return {
    revalidate: 60 * 60,
    props: {
      recommendedTitle: data.recommended.sections.title,
      recommendedGames: gamesMapper(data.recommended.sections.games),
      recommendedHighlight: highlightMapper(data.recommended.sections.highlight)
    }
  }
}

export default SuccessPage
