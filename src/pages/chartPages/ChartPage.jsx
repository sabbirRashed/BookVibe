import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { data } from 'react-router';

const ChartPage = () => {
    const { markedBooks } = useContext(BookContext);
    // console.log(markedBooks)

    const chartsDataOfBooks = markedBooks.map(bookData => {

        const book = {
            name: bookData.bookName,
            totalPages: bookData.totalPages,
        }
        // console.log(book)
        return book;
    })
    console.log(chartsDataOfBooks);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}
    C${x + width / 3},${y + height} 
     ${x + width / 2},${y + height / 3} 
     ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} 
     ${x + (2 * width) / 3},${y + height} 
     ${x + width},${y + height}
    Z`;
    };

    const TriangleBar = ({ fill, x, y, width, height }) => {
        if (x == null || y == null || width == null || height == null) return null;

        return (
            <path
                d={getPath(x, y, width, height)}
                fill={fill}
            />
        );
    };


    return (

        <div className='w-11/12 max-w-325 mx-auto mt-20 flex justify-center items-center min-h-[70vh]'>
            <BarChart width={800} height={500} data={chartsDataOfBooks}>
                <Tooltip></Tooltip>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="totalPages" fill="#8884d8" shape={TriangleBar} />

            </BarChart>
        </div>
    );
};

export default ChartPage;