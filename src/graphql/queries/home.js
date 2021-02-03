import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_HOME = gql`
  query QueryHome($date: Date!, $price: Int!, $limit: Int!) {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: $date }
      sort: "release_date:desc"
      limit: $limit
    ) {
      ...GameFragment
    }

    upcomingGames: games(
      where: { release_date_gt: $date }
      sort: "release_date:desc"
      limit: $limit
    ) {
      ...GameFragment
    }

    freeGames: games(
      where: { price: $price }
      sort: "release_date:desc"
      limit: $limit
    ) {
      ...GameFragment
    }

    sections: home {
      newGames {
        title
        highlight {
          ...HighlightFragment
        }
      }

      popularGames {
        title
        highlight {
          ...HighlightFragment
        }
        games {
          ...GameFragment
        }
      }

      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }

      freeGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`
