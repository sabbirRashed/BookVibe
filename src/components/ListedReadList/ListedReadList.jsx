import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../ui/BookCard';

const ListedReadList = () => {
    const { markedBooks, wishlist } = useContext(BookContext);
    return (
        <div className='border border-green-500 mt-8 space-y-6'>
            {markedBooks.map((book, ind) => <BookCard key={ind} book={book}></BookCard>)}
        </div>
    );
};

export default ListedReadList;