import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';

const ListedWishList = () => {
     const { markedBooks, wishlist } = useContext(BookContext);

    return (
        <div className='border border-green-500 mt-8 space-y-6'>
            <p>Listted wish list</p>
        </div>
    );
};

export default ListedWishList;