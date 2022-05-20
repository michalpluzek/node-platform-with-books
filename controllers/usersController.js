const { getUserFromDatabase } = require('../services/getUserFromDatabase');

exports.postUser = (request, response) => {
  try {
    const { login, password } = request.body;
    const user = getUserFromDatabase(login);
    const isPasswordCorrect = user.password === password;

    if (!user) {
      return response.status(404).json({
        message: 'Użytkownik o podanym loginie nie istnieje',
      });
    }

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
