import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import ListedBookCard from '../ui/ListedBookCard';

const ListedWishList = ({sortingType}) => {
    const {  wishlist } = useContext(BookContext);

    if (wishlist.length === 0) {
        return <div className='bg-base-300 py-20 rounded-2xl mt-8'>
            <h2 className='text-center text-2xl md:text-3xl font-bold'>No wish list data found</h2>
        </div>
    }

    if (sortingType === 'pages') {
        const sortedByPage = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
        return (
            <div className='mt-8 space-y-6'>
                {sortedByPage.map((book, ind) => <ListedBookCard key={ind} book={book}></ListedBookCard>)}
            </div>
        );
    }
    else if (sortingType === 'ratings') {
        const sortedByRatings = [...wishlist].sort((a, b) => b.rating - a.rating);
        return (
            <div className='mt-8 space-y-6'>
                {sortedByRatings.map((book, ind) => <ListedBookCard key={ind} book={book}></ListedBookCard>)}
            </div>
        );
    }

    return (
        <div className='mt-8 space-y-6'>
            {wishlist.map((book, ind) => <ListedBookCard key={ind} book={book}></ListedBookCard>)}
        </div>
    );
};

export default ListedWishList;