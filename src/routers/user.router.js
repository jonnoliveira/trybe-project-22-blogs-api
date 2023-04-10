const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();
const { authToken } = require('../middlewares/authorization');

router.get('/:id ', authToken, userController.findById);

router.delete('/me', authToken, userController.removeMe);

router.post('/', userController.insert);

router.get('/', authToken, userController.findAll);

module.exports = router;