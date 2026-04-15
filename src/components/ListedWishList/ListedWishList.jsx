import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import ListedBookCard from '../ui/ListedBookCard';

const ListedWishList = () => {
    const { markedBooks, wishlist } = useContext(BookContext);

    if (markedBooks.length === 0) {
        return <div className='bg-base-300 py-20 rounded-2xl mt-8'>
            <h2 className='text-center text-2xl md:text-3xl font-bold'>No wish list data found</h2>
        </div>
    }

    return (
        <div className='mt-8 space-y-6'>
            {wishlist.map((book, ind) => <ListedBookCard key={ind} book={book}></ListedBookCard>)}
        </div>
    );
};

export default ListedWishList;