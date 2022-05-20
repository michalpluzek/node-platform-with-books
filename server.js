const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');

const usersRoutes = require('./routes/usersRoutes');
const booksRoutes = require('./routes/booksRoutes');

const server = express();

server.use(cors());
server.use(json());
server.use(urlencoded({ extended: true }));

server.use('/users', usersRoutes);
server.use('/books', booksRoutes);

server.listen(8000, () => console.log('Server is started...'));
