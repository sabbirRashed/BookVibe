import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../ui/BookCard';
import ListedBookCard from '../ui/ListedBookCard';

const ListedReadList = () => {
    const { markedBooks, wishlist } = useContext(BookContext);
    return (
        <div className='mt-8 space-y-6'>
            {markedBooks.map((book, ind) => <ListedBookCard key={ind} book={book}></ListedBookCard>)}
        </div>
    );
};

export default ListedReadList;