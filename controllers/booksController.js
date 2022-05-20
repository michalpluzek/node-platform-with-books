const {
  getAllBooksFromDatabase,
} = require('../services/getAllBooksFromDatabase');
const { Book } = require('../models/Book');

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
    return response.status(500).json({
      error,
      message:
        'Wystpił błąd podczas wykonywania metody GET w endpoincie /books',
    });
  }
};

exports.putBook = (request, response) => {
  try {
    const { authors, id, img, price, title } = request.body;
    const books = getAllBooksFromDatabase();

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
    return response.status(500).json({
      error,
      message:
        'Wystpił błąd podczas wykonywania metody PUT w endpoincie /books',
    });
  }
};

exports.postBook = (request, response) => {
  try {
    const { authors, img, price, title } = request.body;
    const books = getAllBooksFromDatabase();

    if (!authors || !img || !price || !title) {
      return response.status(400).json({
        message: 'Nie podano wszystkich wymaganych informacji',
      });
    }

    const isBookTitleExist = books.some((book) => book.title === title);
    if (isBookTitleExist) {
      return response.status(409).json({
        message: 'Książka o tym tytule już istnieje',
      });
    }

    const authorsArray = JSON.parse(authors);
    const priceNumber = JSON.parse(price);

    const newBook = new Book(authorsArray, img, priceNumber, title);
    books.push(newBook);

    return response.status(201).json({
      books,
      message: 'Książka dodana',
    });
  } catch (error) {
    return response.status(500).json({
      error,
      message:
        'Wystpił błąd podczas wykonywania metody POST w endpoincie /books',
    });
  }
};

exports.deleteBook = (request, response) => {
  try {
    const { id } = request.params;
    const books = getAllBooksFromDatabase();

    const indexBookToDelete = books.findIndex((book) => book.id === id);
    if (indexBookToDelete === -1) {
      return response.status(404).json({
        message: 'Nie znaleziono książki o podanym id',
      });
    }

    books.splice(indexBookToDelete, 1);

    return response.status(200).json({
      books,
      message: 'Książka usunięta',
    });
  } catch (error) {
    return response.status(500).json({
      error,
      message:
        'Wystpił błąd podczas wykonywania metody DELETE w endpoincie /books/:id',
    });
  }
};
