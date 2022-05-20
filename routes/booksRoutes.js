const { Router } = require('express');

const { getBooks, putBook } = require('../controllers/booksController');

const router = Router();

router.get('/', getBooks);
router.put('/', putBook);

router.use((request, response) =>
  response.status(404).json({
    message: `Nie znaleziono metody ${request.method} w endpoincie /books`,
  })
);

module.exports = router;
