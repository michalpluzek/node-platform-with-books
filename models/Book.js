const { v4: uuid } = require('uuid');

exports.booksData = [
  {
    authors: ['Autor anonimowy'],
    id: uuid(),
    img: 'https://getuikit.com/v2/docs/images/placeholder_300x455.svg',
    price: 34.99,
    title: 'Przykładowy tytuł',
  },
  {
    authors: ['Autor anonimowy 1', 'Autor anonimowy 2'],
    id: uuid(),
    img: 'https://getuikit.com/v2/docs/images/placeholder_300x455.svg',
    price: 64.99,
    title: 'Przykładowy tytuł 2',
  },
];

exports.Book = class {
  constructor(authors, img, price, title) {
    this.authors = [...authors];
    this.id = uuid();
    this.img = img;
    this.price = price;
    this.title = title;
  }
};
