const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();
const { authToken } = require('../middlewares/authorization');

router.post('/', userController.insert);

router.get('/', authToken, userController.getAllUsers);

module.exports = router;