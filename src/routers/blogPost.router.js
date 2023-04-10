const express = require('express');
const { blogPostController } = require('../controllers');

const router = express.Router();
const { authToken } = require('../middlewares/authorization');

// router.post('/', blogPostController.insert);

router.put('/:id', authToken, blogPostController.update);

router.get('/:id', authToken, blogPostController.findById);

router.get('/', authToken, blogPostController.findAll);

module.exports = router;