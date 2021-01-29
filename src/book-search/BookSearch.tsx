import React, { useEffect, useState } from "react";
import { getBooksByType } from "./book-search.service";

import { Book, BookList } from "../book-list/BookList";

async function requestBooks(bookTypeToSearch?: string) {
    if (bookTypeToSearch) {
        const allBooks = await getBooksByType(bookTypeToSearch);
        return allBooks
    }
}

const BookSearch = () => {
    const [bookType, updateBookType] = useState("");
    const [bookTypeToSearch, updateBookTypeToSearch] = useState("");
    const [allAvailableBooks, setAllAvailableBooks] = useState<Book[]>()

    useEffect(() => {
        async function getAllBooks() {
            const allBooks = await requestBooks(bookTypeToSearch);
            setAllAvailableBooks(allBooks)
        }
        getAllBooks();
    }, [bookTypeToSearch]);
    return (
            <>
                <div className="book--container">
                    <div className="search-params">
                        <div>
                            <form
                                onSubmit={(e) => {
                                    debugger;
                                    e.preventDefault();
                                   updateBookTypeToSearch(bookType)
                                }}
                            >
                                <input
                                    className="full-width"
                                    autoFocus
                                    name="gsearch"
                                    type="search"
                                    value={bookType}
                                    placeholder="Search for books to add to your reading list and press Enter"
                                    onChange={e => updateBookType(e.target.value)}
                                />
                            </form>
                            {!bookType && (
                                <div className="empty">
                                    <p>
                                        Try searching for a topic, for example
                                        <a onClick={() => {
                                                updateBookType("Javascript");
                                            }}
                                        >
                                            {" "}
                                            "Javascript"
                                        </a>
                                    </p>
                                </div>
                            )}
                            {allAvailableBooks && allAvailableBooks.length > 0 && (
                                <BookList bookList={allAvailableBooks} />
                            )}
                        </div>
                    </div>
                </div>
            </>
    );
};

export default BookSearch;
