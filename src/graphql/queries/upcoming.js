import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_UPCOMING = gql`
  query QueryUpcoming($date: Date!, $limit: Int!) {
    upcomingGames: games(
      where: { release_date_gt: $date }
      sort: "release_date:desc"
      limit: $limit
    ) {
      ...GameFragment
    }

    showcase: home {
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
