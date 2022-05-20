const { getBookFromDatabase } = require('../services/getBookFromDatabase');
const {
  getAllBooksFromDatabase,
} = require('../services/getAllBooksFromDatabase');

exports.getBooks = (request, response) => {
  try {
    const books = getAllBooksFromDatabase();

    if (!books) {
      return response.status(404).json({
        message: 'Baza książek jest pusta',
      });
    }

    return response.status(200).json({
      books,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        'Wystpił błąd podczas wykonywania metody GET w endpoincie /books',
    });
  }
};
