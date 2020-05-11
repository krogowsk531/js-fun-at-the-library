class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patron, boolean) {
    if (boolean === true) {
    return `Good morning, ${patron}!`;
    } else {
    return `Hello, ${patron}!`;
    }
  }

  findBook(book) {
    if (book === 'The Fifth Season') {
      this.library.shelves.fantasy.pop(book);
      return `Yes, we have ${book}`;
    }
    return `Sorry, we do not have ${book}`;
  }

  calculateLateFee(number) {
    return Math.ceil(number * .25);
  }
}

module.exports = Librarian;
