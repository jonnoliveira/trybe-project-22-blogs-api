const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.post('login', userController.findByLogin);

module.exports = router;