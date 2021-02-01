import React, { useCallback, useMemo } from 'react';
import { WishlistContext } from './useWishlist';

export interface WishtlistBookProps {
  bookId: string
}

export const WishlistBookCard: React.FC<WishtlistBookProps> = ({ bookId }) => {
  const { wishlist, removeFromWishlist } = WishlistContext.useContainer()

  const book = useMemo(() => wishlist.books[bookId], [bookId, wishlist.books])

  const removeThisFromWishlist = useCallback(() => removeFromWishlist(book), [book, removeFromWishlist])

  return (
    <div className="wishlist--book" key={book.id}>
      {book.title}
      <button onClick={removeThisFromWishlist}>Remove</button>
    </div>
  )
}