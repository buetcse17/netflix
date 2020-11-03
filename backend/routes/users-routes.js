const express = require('express');
const {check} = require('express-validator');
const usersController = require ('./../controllers/users-controller');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/', usersController.getUsers);

router.post('/signup', [
    check('USER_ID')
      .not()
      .isEmpty(),
    check('NAME').isLength({ min: 3 },
        check('EMAIL').normalizeEmail().isEmail())
  ], usersController.signup);

router.post('/login', usersController.login);

router.use(checkAuth);

module.exports = router;