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

exports.putBook = (request, response) => {
  try {
    const { authors, id, img, price, title } = request.body;
    const books = [...getAllBooksFromDatabase()];

    if (!authors || !id || !img || !price || !title) {
      return response.status(400).json({
        message: 'Nie podano wszystkich wymaganych informacji',
      });
    }

    const indexBookToUpdate = books.findIndex((book) => book.id === id);
    if (indexBookToUpdate === -1) {
      return response.status(404).json({
        message: 'Nie znaleziono książki o podanym id',
      });
    }

    const authorsArray = JSON.parse(authors);
    const priceNumber = JSON.parse(price);

    const updatedBook = {
      ...request.body,
      authors: authorsArray,
      price: priceNumber,
    };

    books.splice(indexBookToUpdate, 1, updatedBook);

    return response.status(202).json({
      books,
      message: 'Książka zaktualizowana',
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        'Wystpił błąd podczas wykonywania metody PUT w endpoincie /books',
    });
  }
};
