import { useState } from "react"
import { createContainer } from "unstated-next"
import { Book } from "../book-card/BookCard"

export type WishlistBook = Pick<Book, 'id' | 'title'>

export interface Wishlist {
  books: {
    [key: string]: WishlistBook
  },
  count: number 
}

const emptyWishlist: Wishlist = {
  books: {},
  count: 0
}

const getBookCount = (books: { [key: string]: WishlistBook }) => Object.keys(books).length

export const useWishList = () => {
  const [wishlist, setWishlist] = useState<Wishlist>(emptyWishlist)

  const addToWishlist = (book: WishlistBook) => {
    setWishlist(previousWishlist => { 
      const updatedBooks = {
        ...previousWishlist.books,
        [book.id]: book
      }
      return {
        ...previousWishlist,
        books: updatedBooks,
        count: getBookCount(updatedBooks)
      }
    })
  }

  const removeFromWishlist = (book: WishlistBook) => {
    setWishlist(previousWishlist => {
      const { [book.id]: id, ...books } = previousWishlist.books
      return {
        ...previousWishlist,
        books,
        count: getBookCount(books)
      }
    })
  }

  return { 
    wishlist,
    addToWishlist,
    removeFromWishlist
  }
}

export const WishlistContext = createContainer(useWishList)