const { Router } = require('express');

const { postUser, patchUser } = require('../controllers/usersController');

const router = Router();

router.post('/', postUser);
router.patch('/', patchUser);

router.use((request, response) =>
  response.status(404).json({
    message: `Nie znaleziono metody ${request.method} w endpoincie /users`,
  })
);

module.exports = router;
