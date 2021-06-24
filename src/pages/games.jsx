import { initializeApollo } from 'utils/apollo'
import GamesTemplate from 'templates/Games'
import { QUERY_GAMES } from 'graphql/queries/games'
import { parseQueryStringToWhere } from 'utils/filter/index'
import {
  categoriesFields,
  platformsFields,
  priceFields,
  sortFields
} from 'utils/filter/fields'

const GamesPage = (props) => <GamesTemplate {...props} />

export const getServerSideProps = async ({ query }) => {
  const apolloClient = initializeApollo()

  const filterPrice = {
    title: 'Price',
    name: 'price_lte',
    type: 'radio',
    fields: priceFields
  }

  const filterPlatforms = {
    title: 'Platforms',
    name: 'platforms',
    type: 'checkbox',
    fields: platformsFields
  }

  const filterSort = {
    title: 'Sort by price',
    name: 'sort',
    type: 'radio',
    fields: sortFields
  }

  const filterCategories = {
    title: 'Genres',
    name: 'categories',
    type: 'checkbox',
    fields: categoriesFields
  }

  const filterItems = [
    filterSort,
    filterPrice,
    filterPlatforms,
    filterCategories
  ]

  await apolloClient.query({
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}

export default GamesPage
