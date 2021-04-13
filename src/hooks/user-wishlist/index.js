import { useMutation } from '@apollo/client'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'
import { useQueryWishlist } from 'graphql/queries/wishlist'
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

  const { data, loading: loadingQuery } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email
    }
  })

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games || [])
    setWishlistId(data?.wishlists[0]?.id)
  }, [data])

  const wishlistIds = useMemo(() => wishlistItems.map((game) => game.id), [
    wishlistItems
  ])

  const isInWishlist = (id) => !!wishlistItems.find((game) => game.id === id)

  const addToWishlist = (id) =>
    !wishlistId
      ? createList({
          variables: { input: { data: { games: [...wishlistIds, id] } } }
        })
      : updateList({
          variables: {
            input: {
              where: { id: wishlistId },
              data: { games: [...wishlistIds, id] }
            }
          }
        })

  const removeFromWishlist = (id) => {
    updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: { games: wishlistIds.filter((gameId) => gameId !== id) }
        }
      }
    })
  }

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
