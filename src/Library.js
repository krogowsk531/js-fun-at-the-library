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
  if (!library.shelves.fiction.includes(book.title) && !library.shelves.nonFiction.includes(book.title) && !library.shelves.fantasy.includes(book.title)) {
    return `Sorry, there are currently no copies of ${book} available at the Denver Public Library`
  } else if (library.shelves.fiction.includes(book.title)) {

  console.log('hi')

  var currentFictionShelf = library.shelves.fiction.find(checkedOutBook => checkedOutBook.title != book)

  console.log(currentFictionShelf)

  // var currentNonFictionShelf = library.shelves.nonFiction.find(checkedOutBook => checkedOutBook.title != book)
  //
  // var currentFantasyShelf = library.shelves.fantasy.find(checkedOutBook => checkedOutBook.title != book)

  return `You have now checked out ${book} from the Denver Public Library`
  }

  // find gives the first one that matches

//if the title is not in the array return error message


  // var allShelves = [library.shelves.fantasy, library.shelves.fiction, library.shelves.nonFiction]

  // var currentShelf = library.shelves.fantasy
  // currentShelf = currentShelf.filter(checkedOutBook => checkedOutBook.title != book)
  //
  // var currentShelf = library.shelves.nonFiction
  // currentShelf = currentShelf.filter(checkedOutBook => checkedOutBook.title != book)
  //
  // var currentShelf = library.shelves.fiction
  // currentShelf = currentShelf.filter(checkedOutBook => checkedOutBook.title != book)


  }

//check to see if the book is on the shelf
//we can only checkout books that are on the shelf
//not changing anything except the return message
//the title "The Fifth Season" which is not currently part of any object
//The Fifth Season is undefined?
//maybe a conditional
//if not on the shelf return "Sorry..."
//interpolate that return statement





module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
