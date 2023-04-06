const express = require('express');
const { loginController } = require('../controllers');
const hasEmailPass = require('../middlewares/hasEmailPass');

const router = express.Router();

router.post('/', hasEmailPass, loginController.findByLogin);

module.exports = router;