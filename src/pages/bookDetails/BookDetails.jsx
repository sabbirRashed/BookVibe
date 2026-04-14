import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { BookContext } from '../../Context/BookProvider';



const BookDetails = () => {
    const { bookId: bookParamsId } = useParams();
    const booksData = useLoaderData();
    const {markedBooks, setMarkedBooks, handleMarkAsRead, handleWishList} = useContext(BookContext);
    // console.log(markedBooks);
   

    const expectedBook = booksData.find((book) => book.bookId === Number(bookParamsId));
    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        publisher,
        yearOfPublishing
    } = expectedBook;
    // console.log(expectedBook);


    return (
        <div className="card lg:card-side bg-base-100 gap-4 w-11/12  max-w-325 mx-auto mt-25 border-2 border-base-300">
            <figure className='flex-1 bg-base-300 m-6 rounded-lg
            '>
                <img
                    src={image}
                    alt="Album"
                    className='w-[150px] md:w-[300px] h-[300px] md:h-[564px] py-10 md:py-15 hover:scale-110 transition-all duration-300' />
            </figure>
            <div className="card-body flex-1">
                <div className='border-b-2 border-b-base-300 pb-4'>
                    <h2 className="card-title text-3xl md:text-4xl font-bold text-[#131313]">{bookName}</h2>
                    <p className='text-base md:text-lg font-medium text-[#131313cb] mt-4'>By : {author}</p>
                </div>
                <h3 className='text-base md:text-lg font-medium text-[#131313cb] border-b-2 border-b-base-300 pb-3'>{category}</h3>
                <div className='border-b-2 border-b-base-300 bt-3 pb-4 space-y-4'>
                    <p className='text-[#131313cb]'><span className='font-medium text-[#131313]'>Review : </span> {review}</p>
                    <div className='flex gap-2 items-center'>
                        <span className=' font-medium text-[#131313]'>Tag : </span>
                        {expectedBook.tags.map((tag, index) => {
                            return <div key={index}
                                className='badge text-green-500 bg-green-100 font-medium'> #{tag}</div>
                        })}
                    </div>
                </div>
                <div className='space-y-3 py-5'>
                    <p className='grid grid-cols-3 items-center'>
                        <span>Number of Pages :</span>
                        <span className='text-[#] font-semibold'>{totalPages}</span></p>
                    <p className='grid grid-cols-3 items-center'>
                        <span>Publisher :</span>
                        <span className='text-[#] font-semibold'> {publisher}</span>
                    </p>
                    <p className='grid grid-cols-3 items-center'>
                        <span>Year of Publishing :</span>
                        <span className='text-[#] font-semibold'>{yearOfPublishing}</span>
                    </p>
                    <p className='grid grid-cols-3 items-center'>
                        <span>Rating :</span>
                        <span className='text-[#] font-semibold'>{rating}</span>
                    </p>
                </div>
                <div>
                    <button
                        onClick={() => { handleMarkAsRead(expectedBook) }}
                        className='btn mr-2'>Mark as Read</button>
                    <button 
                    onClick={() => {handleWishList(expectedBook)}}
                    className='btn btn-accent text-white'>Add to Wishlist</button>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;