const { booksData } = require('../models/Book');

exports.getAllBooksFromDatabase = () => {
  const areBooksExist = booksData.length > 0;

  if (!areBooksExist) {
    return null;
  }

  return booksData;
};
