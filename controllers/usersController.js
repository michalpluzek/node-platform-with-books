const { getUserFromDatabase } = require('../services/getUserFromDatabase');
const { getBookFromDatabase } = require('../services/getBookFromDatabase');

exports.postUser = (request, response) => {
  try {
    const { login, password } = request.body;

    const user = getUserFromDatabase(login);

    if (!user) {
      return response.status(404).json({
        message: 'Użytkownik o podanym loginie nie istnieje',
      });
    }

    const isPasswordCorrect = user.password === password;

    if (!isPasswordCorrect) {
      return response.status(401).json({
        message: 'Hasło lub login jest niepoprawne',
      });
    }

    delete user.password;

    return response.status(200).json({
      user,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        'Wystpił błąd podczas wykonywania metody POST w endpoincie /users',
    });
  }
};

exports.patchUser = (request, response) => {
  try {
    const { login, bookId } = request.body;

    const user = getUserFromDatabase(login);

    if (!user) {
      return response.status(404).json({
        message: 'Nie znaleziono użytkownika o podanym loginie',
      });
    }

    const book = getBookFromDatabase(bookId);

    if (!book) {
      return response.status(404).json({
        message: 'Nie znaleziono książki o podanym Id',
      });
    }

    const doesUserAlreadyHaveThisBook = user.books.some(
      (userBookId) => userBookId === bookId
    );

    if (doesUserAlreadyHaveThisBook) {
      return response.status(200).json({
        user,
        message: `Książka ${book.title} już posiadana`,
      });
    }

    const doesUserHaveEnoughBudget = user.budget >= book.price;

    if (!doesUserHaveEnoughBudget) {
      return response.status(403).json({
        message: 'Użytkownik nie posiada wystarczającego budżetu',
      });
    }

    user.budget = Number((user.budget - book.price).toFixed(2));
    user.books.push(bookId);

    delete user.password;

    return response.status(202).json({
      user,
      message: `Książka ${book.title} zakupiona`,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        'Wystpił błąd podczas wykonywania metody PATCH w endpoincie /users',
    });
  }
};
