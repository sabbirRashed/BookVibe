import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link 
        to={`/bookDetails/${book.bookId}`}
        className="card bg-base-100 border-2 border-base-300 p-6 space-y-6 hover:-translate-y-4  hover:border-base-300 transition-all">
            <figure className=' bg-base-300 p-6 rounded-lg'>
                <img
                    src={book.image}
                    alt="Shoes"
                    className='w-30 h-45' />
            </figure>
            <div className="card-body p-0 space-y-3">
                <div className='flex gap-2 items-center'>
                    {book.tags.map((tag, index) => {
                        return <div key={index}
                        className='badge text-green-500 bg-green-100 font-medium'>{tag}</div>
                    })}
                </div>
                <h2 className="card-title text-xl sm:text-2xl">{book.bookName}</h2>
                <p className='font-medium'>By : {book.author}</p>
                <div className='flex justify-between items-center border-t border-t-base-300 font-medium pt-3'>
                    <p>Fiction</p>
                    <p className=' flex justify-end items-center gap-2 '>5.00 <FaRegStar /></p>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;