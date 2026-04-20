import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GrDocumentText } from 'react-icons/gr';
import { HiUsers } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import { Link } from 'react-router';

const ListedBookCard = ({ book }) => {
    return (
        <div className='border border-gray-300 hover:shadow-2xl hover:border-success transition-all duration-200 flex flex-col  md:flex-row items-center gap-6 p-6 rounded-xl'>
            <div className='img-container bg-base-300 rounded-xl flex justify-center items-center flex-1 p-10'>
                <img
                    src={book.image}
                    alt=""
                    className='w-30 h-40 scale-110 hover:scale-125 transition-all duration-300' />
            </div>
            <div className='content-container flex-4 space-y-4'>
                <h2 className='text-xl md:text-2xl font-bold'>{book.bookName}</h2>
                <p className='font-medium'>By : {book.author}</p>
                <div className='flex items-center gap-4'>
                    <span className='font-bold'>Tag :</span>
                    {
                        book.tags.map((tag, index) => {
                            return <div key={index}
                                className='badge text-green-500 bg-green-100 font-medium'> #{tag}</div>
                        })
                    }
                    <div className='flex gap-1 items-center'><SlLocationPin />
                        <span>Year of Publishing :</span>
                        <span>{book.yearOfPublishing}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <span><FiUsers className='text-lg' /></span>
                        <span>Publisher : {book.publisher}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span><GrDocumentText /></span>
                        <span>Page : {book.totalPages}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 border-t-2 border-t-base-300 pt-4'>
                    <span className='px-3 py-1 bg-blue-100 text-blue-500 rounded-lg'>Category : {book.category}</span>
                    <span className='flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-500 rounded-lg'>Rating : {book.rating} <FaRegStar /></span>
                    <Link to={`/bookDetails/${book.bookId}`}><button className='btn bg-success rounded-lg h-8 text-white'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBookCard;