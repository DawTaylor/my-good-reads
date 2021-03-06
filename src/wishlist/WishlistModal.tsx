import React from 'react'
import Modal from 'react-modal'
import { WishlistContext } from './useWishlist';
import { Wishlist } from './Wishlist';

const customStyles = {
  overlay: {
    zIndex: 101
  },
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
}

export const WishlistModal = () => {
  const { isModalOpen } = WishlistContext.useContainer()
  return (
    <Modal isOpen={isModalOpen} style={customStyles} closeTimeoutMS={250}>
      <Wishlist isModal />
    </Modal>
  )
}