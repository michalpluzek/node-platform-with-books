const { booksData } = require('../models/Book');

exports.getBookFromDatabase = (bookId) => {
  const isBookExist = booksData.some((book) => book.id === bookId);
  const book = booksData.find((book) => book.id === bookId);

  if (!isBookExist) {
    return null;
  }

  return book;
};
