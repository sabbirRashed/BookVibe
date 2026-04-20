import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadlistToLocalDB, getReadlistFromLocalDB, getWishlistFromLocalDB } from '../util/LocalDB';

export const BookContext = createContext('')

const BookProvider = ({ children }) => {

    const [markedBooks, setMarkedBooks] = useState(() => getReadlistFromLocalDB());
    const [wishlist, setWishList] = useState(() => getWishlistFromLocalDB())

    // useEffect(()=>{
    //    const allReadListFromLocalDB = getReadlistFromLocalDB();
    //    console.log(allReadListFromLocalDB);
    //    setMarkedBooks(allReadListFromLocalDB);
    // }, [])


    const handleMarkAsRead = (currentBook) => {
        addReadlistToLocalDB(currentBook);

        const isMarkedBook = markedBooks.find(book => book.bookId === currentBook.bookId);
        // console.log(isMarkedBook, markedBooks);

        if (isMarkedBook) {
            toast.error('The book is already exist');
        }
        else {
            setMarkedBooks([...markedBooks, currentBook]);
            toast.success('Successfully added in read list');
        }
    }

    const handleWishList = (currentBook) =>{
        const isExistInReadList = markedBooks.find(book => book.bookId === currentBook.bookId);

        if(isExistInReadList){
            toast.error('This book is already eixist in read list');
            return;
        }
        const isExistInWishList = wishlist.find(book => book.bookId === currentBook.bookId);
        
        if(isExistInWishList){
            toast.error('This book is already exist in wish list');
        }
        else{
            setWishList([...wishlist, currentBook]);
            toast.success('Successfully added in wish list');
        }
      
    }

    const data = {
        markedBooks,
        setMarkedBooks,
        handleMarkAsRead,
        wishlist,
        setWishList,
        handleWishList,

    }

    return (
        <div>
            <BookContext.Provider value={data}>
                {children}
            </BookContext.Provider>
        </div>
    );
};

export default BookProvider;