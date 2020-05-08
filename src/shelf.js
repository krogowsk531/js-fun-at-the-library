function shelfBook(title, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(title)
  }
}

function unshelfBook(title, shelf) {

}



module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  // listTitles: listTitles,
  // searchShelf: searchShelf
};
