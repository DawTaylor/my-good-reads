import { renderHook, act } from '@testing-library/react-hooks'
import { useWishList } from './useWishlist'

const FAKE_BOOK1 = { id: 'ID1', title: 'title'}
const FAKE_BOOK2 = { id: 'ID2', title: 'title'}
const FAKE_BOOK3 = { id: 'ID3', title: 'title'}

describe('Test useWishlist', () => {
  test('should add a book to wishlist', () => {
    const { result } = renderHook(() => useWishList())

    act(() => {
      result.current.addToWishlist(FAKE_BOOK1)
    })

    expect(result.current.wishlist.count).toBe(1)
  })

  test('should not add a duplicate book to wishlist', () => {
    const { result } = renderHook(() => useWishList())

    act(() => {
      result.current.addToWishlist(FAKE_BOOK1)
    })

    expect(result.current.wishlist.count).toBe(1)
    
    act(() => {
      result.current.addToWishlist(FAKE_BOOK1)
    })

    expect(result.current.wishlist.count).toBe(1)
  })

  test('should add many books to wishlist', () => {
    const { result } = renderHook(() => useWishList())

    act(() => {
      result.current.addToWishlist(FAKE_BOOK1)
      result.current.addToWishlist(FAKE_BOOK2)
      result.current.addToWishlist(FAKE_BOOK3)
    })
    
    expect(result.current.wishlist.count).toBe(3)
  })
  
  test('should remove 1 book from wishlist', () => {
    const { result } = renderHook(() => useWishList())
    
    act(() => {
      result.current.addToWishlist(FAKE_BOOK1)
      result.current.addToWishlist(FAKE_BOOK2)
      result.current.addToWishlist(FAKE_BOOK3)
    })
    
    expect(result.current.wishlist.count).toBe(3)

    act(() => {
      result.current.removeFromWishlist(FAKE_BOOK2)
    })

    expect(result.current.wishlist.count).toBe(2)
    expect(result.current.wishlist.books[FAKE_BOOK2.id]).toBe(undefined)
  })

  test('should set modal to open', () => {
    const { result } = renderHook(() => useWishList())

    act(() => result.current.toggleModal())

    expect(result.current.isModalOpen).toBe(true)
  })

  test('should set modal to closed', () => {
    const { result } = renderHook(() => useWishList())

    act(() => result.current.toggleModal())
    expect(result.current.isModalOpen).toBe(true)
    act(() => result.current.toggleModal())
    expect(result.current.isModalOpen).toBe(false)
  })
})