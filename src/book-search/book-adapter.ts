import { Book } from "../book-card/BookCard";

interface BookListResponse {
  items: BookResponse[],
  totalItems: number
}

interface BookResponse {
  id: string,
  volumeInfo: BookVolumeResponse
}

interface BookVolumeResponse {
  title: string,
  authors: string[],
  publisher: string,
  publishedDate: string,
  description: string,
  imageLinks:  BookVolumeImageLinksResponse
}

interface BookVolumeImageLinksResponse {
  thumbnail: string
}

const bookAdapter = (book: BookResponse): Book | undefined => {
  if (
      !book.id ||
      !book.volumeInfo ||
      !book.volumeInfo.title ||
      !book.volumeInfo.authors ||
      !book.volumeInfo.publisher ||
      !book.volumeInfo.publishedDate ||
      !book.volumeInfo.description ||
      !book.volumeInfo.imageLinks ||
      !book.volumeInfo.imageLinks.thumbnail
  ) return

  return {
      id: book.id,
      coverUrl: book.volumeInfo.imageLinks.thumbnail,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      publisher: book.volumeInfo.publisher,
      publishedDate: new Date(book.volumeInfo.publishedDate),
      description: book.volumeInfo.description
  }
}

function notUndefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}

export const bookListAdapter = (bookResponse: BookListResponse): Book[] => {
  if(!bookResponse.totalItems) return []
  return bookResponse.items.map(bookAdapter).filter(notUndefined)
}