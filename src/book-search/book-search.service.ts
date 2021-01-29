import  fetchUrl from './../shared/fetchUrl/fetchUrl';
import { bookListAdapter } from './book-adapter';

export async function getBooksByType(type: string) {
    try {
        return await fetchUrl(`https://www.googleapis.com/books/v1/volumes?q=${type}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        }).then(bookListAdapter);
    } catch(exception) {
        return [];

    }
}

