import React, { use } from 'react';
import BookCard from '../ui/BookCard';

const booksPromise = fetch('/booksData.json')
    .then((res) => res.json());

const Allbooks = () => {
    const booksData = use(booksPromise);
    // console.log(booksData);

    return (
        <div className='mt-25 w-11/12 max-w-325 mx-auto'>
            <h2 className='text-center text-4xl font-bold mb-10'>Books</h2>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    booksData.map((book, index) => {
                        return <BookCard key={index} book={book}></BookCard>
                    })
                }
            </div>
        </div>
    );
};

export default Allbooks;