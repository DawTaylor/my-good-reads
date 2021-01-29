import React from 'react'
import './BookCard.scss'

export interface BookCardProps {
  book: Book
}

export interface Book {
  id: string,
  title: string,
  authors: string[],
  publisher: string,
  publishedDate: Date,
  coverUrl: string,
  description: string,
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => (
  <article className="book-card">
    <div className="cover">
      <img src={book.coverUrl} alt={book.title} />
    </div>
    <div className="body">
    <h2 className="title">
      { book.title } by { book.authors[0] }
    </h2>
    <h4 className="subtitle">{ book.publisher } { book.publishedDate.toDateString() } </h4>
    <p className="description">{ book.description }</p>
    </div>
  </article>
)