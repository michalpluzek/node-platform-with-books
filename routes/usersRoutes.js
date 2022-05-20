const { Router } = require('express');

const { postUser } = require('../controllers/usersController');

const router = Router();

router.post('/', postUser);

router.use((request, response) =>
  response.status(404).json({
    message: `Nie znaleziono metody ${request.method} w endpoincie /users`,
  })
);

module.exports = router;
