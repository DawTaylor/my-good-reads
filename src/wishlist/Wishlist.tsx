import React from 'react'
import { WishlistBook, WishlistContext } from './useWishlist'
import './Wishlist.scss'
import { WishlistBookCard } from './WishlistBookCard'

const renderBook = (bookId: string) => {
  return <WishlistBookCard bookId={bookId} />
}

export const Wishlist = () => {
  const { wishlist } = WishlistContext.useContainer()
  return (
    <aside className="wishlist--container">
      <div className="wishlist--header">
        My Reading Wishlist {wishlist.count}
      </div>
      <div className="wishlist--books">
        {Object.keys(wishlist.books).map(renderBook)}
      </div>
    </aside>
  )
}