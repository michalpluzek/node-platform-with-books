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
    bookId: string,
    login: string,
  }

  responses:
    - status: 404, message: 'Nie znaleziono książki o podanym Id'
    - status: 404, message: 'Nie znaleziono użytkownika o podanym loginie',
    - status: 200, data: user(object)
    - status: 403, message: 'Użytkownik nie posiada wystarczającego budżetu',
    - status: 202, data: user(object)
    - status: 500, message: 'Wystpił błąd podczas wykonywania metody PATCH w endpoincie /users'

Endpoint: '/books'

1. Metoda GET (pobranie wszystkich książek)

  responses:
    - status: 200, data: books(object[])
    - status: 500, message: 'Wystpił błąd podczas wykonywania metody GET w endpoincie /books'

2. Metoda PUT (przesłanie zaktualizowanej książki)
  body: {
    authors: string[],
    id: string,
    img: string,
    price: number,
    title: string,
  }

  responses:
    - status: 400, message: 'Nie podano wszystkich wymaganych informacji'
    - status: 404, message: 'Nie znaleziono książki o podanym id'
    - status: 202, data: books(object[])
    - status: 500, message: 'Wystpił błąd podczas wykonywania metody PUT w endpoincie /books'

3. Metoda POST (dodanie nowej książki bo bazy)
  body: {
    authors: string[],
    img: string,
    price: number,
    title: string,
  }

  responses:
    - status: 400, message: 'Nie podano wszystkich wymaganych informacji'
    - status: 409, message: 'Książka o tym tytule już istnieje'
    - status: 201, data: books(object[])
    - status: 500, message: 'Wystpił błąd podczas wykonywania metody POST w endpoincie /books'

4. Metoda DELETE (usuwanie książki)
  params: '/books/:id'

  responses:
    - status: 404, message: 'Nie znaleziono książki o podanym id'
    - status: 200 data: books(object[])
    - status: 500, message: 'Wystpił błąd podczas wykonywania metody DELETE w endpoincie /books/:id'

5. Metoda GET (pobranie pojedyńczej książki)
  params: '/books/:id'

  responses:
    - status: 404, message: 'Nie znaleziono książki o podanym id'
    - status: 200, data: book(object)
    - status: 500, message: 'Wystpił błąd podczas wykonywania metody GET w endpoincie /books/:id'