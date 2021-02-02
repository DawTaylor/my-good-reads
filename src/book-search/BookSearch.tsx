import React, { useEffect, useState } from "react";
import { getBooksByType } from "./book-search.service";

import loading from '../assets/svg/loading.svg'

import { BookList } from "../book-list/BookList";
import { Book } from "../book-card/BookCard";
import {  useDebouncedSearch } from "./useDebouncedSearch";

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
    const [isLoading, setIsLoading] = useState(false)

    const { updateTerm } = useDebouncedSearch(updateBookTypeToSearch)

    useEffect(() => {
        setIsLoading(true)
        async function getAllBooks() {
            const allBooks = await requestBooks(bookTypeToSearch);
            setAllAvailableBooks(allBooks)
            setIsLoading(false)
        }
        getAllBooks();
    }, [bookTypeToSearch]);

    useEffect(() => {
        if(!bookType) updateBookTypeToSearch('')
        updateTerm(bookType)
    }, [bookType, bookTypeToSearch, updateTerm])
    
    return (
            <>
                <div className="book--container">
                    <div className="search-params">
                        <div>
                            <form>
                                <input
                                    className="full-width"
                                    autoFocus
                                    name="gsearch"
                                    type="search"
                                    value={bookType}
                                    placeholder="Search for books to add to your reading list"
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
                            {bookType && isLoading && (
                                <div className="empty">
                                    <img src={loading} alt="Loading books" />
                                </div>
                            )}
                            {bookType && allAvailableBooks && allAvailableBooks.length > 0 && (
                                <BookList bookList={allAvailableBooks} />
                            )}
                        </div>
                    </div>
                </div>
            </>
    );
};

export default BookSearch;
