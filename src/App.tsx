import React from 'react';
import './styles/App.scss';
import BookSearch from './book-search/BookSearch';
import { Wishlist } from './wishlist/Wishlist';
import { WishlistContext } from './wishlist/useWishlist';

function App() {
  return (
      <div>
        <header className="header">
          <div className="header--content">
            <h1>My Good Reads</h1>
          </div>
        </header>
        <WishlistContext.Provider>
          <main className="main-content">
            <BookSearch/>
            <Wishlist/>
          </main>
        </WishlistContext.Provider>
      </div>
  );
}

export default App;
