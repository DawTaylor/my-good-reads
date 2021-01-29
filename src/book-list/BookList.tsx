import React from 'react'

import { Book, BookCard } from '../book-card/BookCard'

export interface BookListProps {
  bookList?: Book[]
}

export const BookList: React.FC<BookListProps> = ({ bookList }) => (
  <>
    {bookList && bookList.map(book => <BookCard book={book} key={book.id} />)}
  </>
)