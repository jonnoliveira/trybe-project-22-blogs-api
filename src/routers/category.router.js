const express = require('express');
const { categoryController } = require('../controllers');
const { authToken } = require('../middlewares/authorization');
const hasCategory = require('../middlewares/hasCategory');

const router = express.Router();

router.post('/', authToken, hasCategory, categoryController.insert);

router.get('/', authToken, categoryController.findAll);

module.exports = router;