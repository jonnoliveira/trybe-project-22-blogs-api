const express = require('express');
const { blogPostController } = require('../controllers');

const router = express.Router();
const { authToken } = require('../middlewares/authorization');

// router.post('/', blogPostController.insert);

router.get('/', authToken, blogPostController.findAll);

module.exports = router;