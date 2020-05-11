function shelfBook(title, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(title);
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  var allTitles = [];
  for (var i = 0; i < shelf.length; i++) {
    allTitles.push(shelf[i].title);
 }
 return allTitles.join(', ');
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title == title) {
      return true;
    }
  }
  return false;
}



module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
