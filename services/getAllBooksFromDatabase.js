const { booksData } = require('../models/Book');

exports.getAllBooksFromDatabase = () => {
  const areBooksExist = booksData.length > 0;
  const books = [...booksData];

  if (!areBooksExist) {
    return null;
  }

  return books;
};
