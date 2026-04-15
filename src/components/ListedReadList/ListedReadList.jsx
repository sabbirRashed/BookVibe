import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../ui/BookCard';
import ListedBookCard from '../ui/ListedBookCard';

const ListedReadList = () => {
    const { markedBooks } = useContext(BookContext);

    if (markedBooks.length === 0) {
        return <div className='bg-base-300 py-20 rounded-2xl mt-8'>
                <h2 className='text-center text-2xl md:text-3xl font-bold'>No read list data found</h2>
        </div>
    }

    return (
        <div className='mt-8 space-y-6'>
            {markedBooks.map((book, ind) => <ListedBookCard key={ind} book={book}></ListedBookCard>)}
        </div>
    );
};

export default ListedReadList;