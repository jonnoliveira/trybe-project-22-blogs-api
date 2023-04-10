const express = require('express');
const { blogPostController } = require('../controllers');

const router = express.Router();
const { authToken } = require('../middlewares/authorization');

router.post('/', authToken, blogPostController.insert);

router.get('/search', authToken, blogPostController.findByQuery);

router.put('/:id', authToken, blogPostController.update);

router.get('/:id', authToken, blogPostController.findById);

router.delete('/:id', authToken, blogPostController.remove);

router.get('/', authToken, blogPostController.findAll);

module.exports = router;