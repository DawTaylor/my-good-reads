import React, { useCallback, useMemo } from 'react';
import { WishlistContext } from './useWishlist';
import './Wishlist.scss'

export interface WishtlistBookProps {
  bookId: string
}

export const WishlistBookCard: React.FC<WishtlistBookProps> = ({ bookId }) => {
  const { wishlist, removeFromWishlist } = WishlistContext.useContainer()

  const book = useMemo(() => wishlist.books[bookId], [bookId, wishlist.books])

  const removeThisFromWishlist = useCallback(() => removeFromWishlist(book), [book, removeFromWishlist])

  return (
    <div className="wishlist--book">
      <p>
        {book.title}
      </p>
      <button onClick={removeThisFromWishlist}>Remove</button>
    </div>
  )
}