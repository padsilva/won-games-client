import { useApolloClient, useMutation } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'
import { QUERY_WISHLIST, useQueryWishlist } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/client'
import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { gamesMapper } from 'utils/mappers'

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext(WishlistContextDefaultValues)

export const WishlistProvider = ({ children }) => {
  const [session] = useSession()
  const [wishlistId, setWishlistId] = useState()
  const [wishlistItems, setWishlistItems] = useState([])
  const apolloClient = useApolloClient()

  const [createList, { loading: loadingCreate }] = useMutation(
    MUTATION_CREATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.createWishlist?.wishlist?.games || [])
        setWishlistId(data?.createWishlist?.wishlist?.id)
      }
    }
  )

  const [updateList, { loading: loadingUpdate }] = useMutation(
    MUTATION_UPDATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.updateWishlist?.wishlist?.games || [])
      }
    }
  )

  const options = {
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email
    }
  }

  const { data, loading: loadingQuery } = useQueryWishlist(options)

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games || [])
    setWishlistId(data?.wishlists[0]?.id)
  }, [data])

  const wishlistIds = useMemo(
    () => wishlistItems.map((game) => game.id),
    [wishlistItems]
  )

  const isInWishlist = (id) => !!wishlistItems.some((game) => game.id === id)

  const optimisticGameResponse = (id) => {
    const game = apolloClient.readFragment({
      id: `Game:${id}`,
      fragment: GameFragment
    })

    return (
      game ?? {
        __typename: 'Game',
        id,
        name: '',
        slug: '',
        cover: {
          __typename: 'UploadFile',
          url: ''
        },
        developers: [
          {
            __typename: 'Developer',
            name: ''
          }
        ],
        price: ''
      }
    )
  }

  const addToWishlist = (id) =>
    !wishlistId
      ? createList({
          variables: { input: { data: { games: [...wishlistItems, id] } } },
          optimisticResponse: {
            createWishlist: {
              wishlist: {
                id: String(Math.round(Math.random() * -1000000)),
                games: [optimisticGameResponse(id)],
                __typename: 'Wishlist'
              },
              __typename: 'createWishlistPayload'
            }
          },
          update: (cache, payload) => {
            const newWishlist = payload.data.createWishlist.wishlist

            const existingWishlist = cache.readQuery({
              query: QUERY_WISHLIST,
              ...options
            })

            if (existingWishlist && newWishlist) {
              cache.writeQuery({
                query: QUERY_WISHLIST,
                data: {
                  wishlists: [newWishlist]
                },
                ...options
              })
            }
          }
        })
      : updateList({
          variables: {
            input: {
              where: { id: wishlistId },
              data: { games: [...wishlistIds, id] }
            }
          },
          optimisticResponse: {
            updateWishlist: {
              wishlist: {
                id: wishlistId,
                games: [...wishlistItems, optimisticGameResponse(id)],
                __typename: 'Wishlist'
              },
              __typename: 'updateWishlistPayload'
            }
          }
        })

  const removeFromWishlist = (id) =>
    updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: { games: wishlistIds.filter((gameId) => gameId !== id) }
        }
      },
      optimisticResponse: {
        updateWishlist: {
          wishlist: {
            id: wishlistId,
            games: wishlistItems.filter(({ id: gameId }) => gameId !== id),
            __typename: 'Wishlist'
          },
          __typename: 'updateWishlistPayload'
        }
      }
    })

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading: loadingQuery || loadingCreate || loadingUpdate
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired
}
