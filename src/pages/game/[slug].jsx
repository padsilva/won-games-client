import { useRouter } from 'next/router'

import Game from 'templates/Game'

import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'
import { getImageUrl } from 'utils/getImageUrl'

const apolloClient = initializeApollo()

const Index = (props) => {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
  // get game data
  const { data } = await apolloClient.query({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache' // garante que os dados estão sempre actualizados quanto se gera o estático
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  // get recommended data
  const { data: recommendedData } = await apolloClient.query({
    query: QUERY_RECOMMENDED
  })

  // get upcoming data
  const TODAY = new Date().toISOString().slice(0, 10)
  const { data: upcomingData } = await apolloClient.query({
    query: QUERY_UPCOMING,
    variables: {
      date: TODAY,
      limit: 8
    }
  })

  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      cover: `${getImageUrl(game.cover.url)}`,
      gameInfo: {
        id: game.id,
        title: game.name,
        description: game.short_description,
        price: game.price
      },
      gallery: game.gallery.map((image) => ({
        src: `${getImageUrl(image.src)}`,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcomingTitle: upcomingData.showcase.upcomingGames.title,
      upcomingGames: gamesMapper(upcomingData.upcomingGames),
      upcomingHighlight: highlightMapper(
        upcomingData.showcase.upcomingGames.highlight
      ),
      recommendedTitle: recommendedData.recommended.sections.title,
      recommendedGames: gamesMapper(recommendedData.recommended.sections.games)
    }
  }
}

export default Index
