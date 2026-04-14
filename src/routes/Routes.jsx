
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layout/MainLayout'
import Homepage from '../pages/homepage/Homepage'
import Books from '../pages/books/Books'
import ErrorPage from '../pages/errorPage/ErrorPage'
import BookDetails from '../pages/bookDetails/BookDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>,
            },
            {
                path: '/Listed_books',
                element: <Books></Books>
            },
            {
                path: 'bookDetails/:bookId',
                loader : () => fetch('/booksData.json'),
                element: <BookDetails></BookDetails>
            }      
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
])