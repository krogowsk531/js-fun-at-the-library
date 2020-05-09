function createLibrary(name) {
  var newLibrary = {
  name: name,
  shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: [],
    },
  }
  return newLibrary;
}

function addBook(library, book) {
  if (book.genre == 'fantasy') {
    library.shelves.fantasy.push(book);
  } else if (book.genre == 'nonFiction') {
    library.shelves.nonFiction.push(book);
  } else {
    library.shelves.fiction.push(book);
  }
}

function checkoutBook(library, book) {
  library.shelves.fiction = library.shelves.fiction.filter(checkedOutBook => checkedOutBook.title != book)

  library.shelves.nonFiction = library.shelves.nonFiction.filter(checkedOutBook => checkedOutBook.title != book)

  library.shelves.fantasy = library.shelves.fantasy.filter(checkedOutBook => checkedOutBook.title != book)

  // var allShelves = [library.shelves.fantasy, library.shelves.fiction, library.shelves.nonFiction]

  // var currentShelf = library.shelves.fantasy
  // currentShelf = currentShelf.filter(checkedOutBook => checkedOutBook.title != book)
  //
  // var currentShelf = library.shelves.nonFiction
  // currentShelf = currentShelf.filter(checkedOutBook => checkedOutBook.title != book)
  //
  // var currentShelf = library.shelves.fiction
  // currentShelf = currentShelf.filter(checkedOutBook => checkedOutBook.title != book)

  return `You have now checked out ${book} from the Denver Public Library`
  }




// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//
// const result = words.filter(word => word.length > 6);


// expected output: Array ["exuberant", "destruction", "present"]
//loop through the fiction array and search for the title
//remove from fiction array using filter
//remove the book from the fiction array
//return "You have chec..."

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
