

const getReadlistFromLocalDB = () => {
    const allReadList = localStorage.getItem("readList");
    // console.log(allReadList, "all books from localDB")

    if (allReadList) return JSON.parse(allReadList);

    return [];
}

const addReadlistToLocalDB = (currentBook) => {
    const allReadlistFromLocalDB = getReadlistFromLocalDB();

    const isExistInLocalDB = allReadlistFromLocalDB.find(book => book.bookId === currentBook.bookId);

    if (!isExistInLocalDB) {

        allReadlistFromLocalDB.push(currentBook);
        localStorage.setItem('readList', JSON.stringify(allReadlistFromLocalDB));
    }
}


// Local storage handle for wish list--------------
const getWishlistFromLocalDB = () => {
    const allWishlist = localStorage.getItem('wishList');

    if (allWishlist) return JSON.parse(allWishlist);

    return [];
}

const addWishListToLocalDB = (currentBook) => {
    const allWishlist = getWishlistFromLocalDB();

    const isExistInLocalDB = allWishlist.find(book => book.bookId === currentBook.bookId);

    if (!isExistInLocalDB) {

        allWishlist.push(currentBook);
        localStorage.setItem('wishList', allWishlist);
    }
}
export {
    getReadlistFromLocalDB,
    addReadlistToLocalDB,
    getWishlistFromLocalDB,
    addWishListToLocalDB
}