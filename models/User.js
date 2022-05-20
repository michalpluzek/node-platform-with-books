const { booksData } = require('./Book');
const { accessLevels } = require('../consts/accessLevels');

exports.usersData = [
  {
    accessLevel: accessLevels.USER,
    books: [booksData[0].id],
    budget: 150,
    login: 'user1',
    password: '1234',
  },
  {
    accessLevel: accessLevels.ADMIN,
    books: [booksData.map((book) => book.id)],
    budget: 100000,
    login: 'admin',
    password: '0000',
  },
];

exports.User = class {
  constructor(login, password) {
    this.login = login;
    this.password = password;
    this.accessLevel = accessLevels.USER;
    this.budget = 0;
    this.books = [];
  }
};
