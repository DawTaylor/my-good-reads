import React from 'react'
import { WishlistBook, WishlistContext } from './useWishlist'
import './Wishlist.scss'
import { WishlistBookCard } from './WishlistBookCard'

const renderBook = (bookId: string) => {
  return <WishlistBookCard bookId={bookId} />
}

export interface WishlistProps {
  isModal?: boolean
}

export const Wishlist: React.FC<WishlistProps> = ({ isModal = false }) => {
  const { wishlist, toggleModal } = WishlistContext.useContainer()
  return (
    <aside className="wishlist--container">
      {!isModal && 
        <button
          className={`wishlist--show-button full-width ${isModal && 'is-modal'}`}
          onClick={toggleModal}
        >
          My Reading Wishlist {wishlist.count}
        </button>
      }
      <div className={`wishlist--body ${isModal && 'is-modal'}`}>
        <div className="wishlist--header">
          My Reading Wishlist {wishlist.count}
          {isModal && <button onClick={toggleModal}>Close</button>}
        </div>
        <div className="wishlist--books">
          {Object.keys(wishlist.books).map(renderBook)}
        </div>
      </div>
    </aside>
  )
}