const { booksData } = require('./Book');
const { accessLevels } = require('../consts/accessLevels');

exports.usersData = [
  {
    login: 'user1',
    password: '1234',
    accessLevel: accessLevels.USER,
    budget: 150,
    books: [booksData[0].id],
  },
  {
    login: 'admin',
    password: '0000',
    accessLevel: accessLevels.ADMIN,
    budget: 100000,
    books: [booksData.map((book) => book.id)],
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
