const { Router } = require('express');

const {
  getBooks,
  putBook,
  postBook,
  deleteBook,
  getBook,
} = require('../controllers/booksController');

const router = Router();

router.get('/', getBooks);
router.put('/', putBook);
router.post('/', postBook);
router.delete('/:id', deleteBook);
router.get('/:id', getBook);

router.use((request, response) =>
  response.status(404).json({
    message: `Nie znaleziono metody ${request.method} w endpoincie /books`,
  })
);

module.exports = router;
