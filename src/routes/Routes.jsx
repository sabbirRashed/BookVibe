
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layout/MainLayout'
import Homepage from '../pages/homepage/Homepage'
import Books from '../pages/books/Books'
import ErrorPage from '../pages/errorPage/ErrorPage'
import BookDetails from '../pages/bookDetails/BookDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: '/Listed_books',
                Component: Books
            },
            {
                path: 'bookDetails/:bookId',
                loader : () => fetch('/booksData.json'),
                Component: BookDetails,
            }      
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
])