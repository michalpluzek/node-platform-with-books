Użytkownicy:
1.
  login: user
  hasło: 1234

2.
  login: admin
  hasło: 0000

  Base url: http://localhost:8000

  Endpoint: '/users'

  1. Metoda POST (logowanie użytkownika):
  body: {
    login: string,
    password: string,
  }

  responses:
    - status: 404, message: 'Użytkownik o podanym loginie nie istnieje'
    - status: 401, message: 'Hasło lub login jest niepoprawne',
    - status: 200, data: user(object)
    - status: 500, message: 'Wystpił błąd podczas wykonywania metody POST w endpoincie /users'

2. Metoda PATCH (zakup książki):
  body: {
    login: string,
    bookId: string,
  }

  responses:
    - status: 404, message: 'Nie znaleziono książki o podanym Id'
    - status: 404, message: 'Nie znaleziono użytkownika o podanym loginie',
    - status: 200, data: user(object)
    - status: 403, message: 'Użytkownik nie posiada wystarczającego budżetu',
    - status: 202, data: user(object)
    - status: 500, message: 'Wystpił błąd podczas wykonywania metody PATCH w endpoincie /users'
