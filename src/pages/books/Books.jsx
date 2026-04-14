import React, { } from 'react';
import BookProvider, { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedReadList/ListedReadList';
import ListedWishList from '../../components/ListedWishList/ListedWishList';

const Books = () => {

    return (
        <div className='w-11/12  max-w-325 mx-auto mt-25'>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>WishList Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;