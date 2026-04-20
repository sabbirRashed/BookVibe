import React, { useState } from 'react';
import BookProvider, { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedReadList/ListedReadList';
import ListedWishList from '../../components/ListedWishList/ListedWishList';

const Books = () => {
    const [sortingType, setSortingType] = useState('');
    // console.log(sortingType)

    return (
        <div className='w-11/12  max-w-325 mx-auto mt-25'>
            <div className='flex justify-center items-center'>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by :   ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li
                            onClick={() => { setSortingType('pages') }}>
                            <a>Pages</a>
                        </li>
                        <li 
                        onClick={() => {setSortingType('ratings')}}>
                            <a>Ratings</a>
                        </li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>WishList Books</Tab>
                </TabList>


                <TabPanel>
                    <ListedReadList sortingType={sortingType}></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList sortingType={sortingType}></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;