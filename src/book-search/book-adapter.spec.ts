import { bookListAdapter, BookListResponse } from './book-adapter'

import json from '../../sampleJSONResponse.json'

describe('Test book list response adapter', () => {
  test('should return all books in correct format', () => {
    const adaptedBooks = bookListAdapter(json as BookListResponse)

    expect(adaptedBooks).toMatchSnapshot()
  })
})