function createLibrary(name) {
  return {
  name: name,
  shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: [],
    },
  }
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
  var fictionShelf = library.shelves.fiction;
  var nonFictionShelf = library.shelves.nonFiction;
  var fantasyShelf = library.shelves.fantasy;
  var allShelves = fictionShelf.concat(nonFictionShelf).concat(fantasyShelf);
  if (!allShelves.find(obj => obj.title == book)) {
    return `Sorry, there are currently no copies of ${book} available at the Denver Public Library`;
  } else {
    library.shelves.fiction = fictionShelf.filter(obj => obj.title != book);
    library.shelves.nonFiction = nonFictionShelf.filter(obj => obj.title != book);
    library.shelves.fantasy = fantasyShelf.filter(obj => obj.title != book);
    return `You have now checked out ${book} from the Denver Public Library`
  }
}



module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
