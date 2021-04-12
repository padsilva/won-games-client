import { gql, useQuery } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'

export const QUERY_WISHLIST = gql`
  query QueryWishlist($identifier: String!) {
    wishlists(where: { user: { email: $identifier } }) {
      id
      games {
        ...GameFragment
      }
    }
  }

  ${GameFragment}
`

export const useQueryWishlist = (options) => useQuery(QUERY_WISHLIST, options)
