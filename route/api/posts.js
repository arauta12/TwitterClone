const express = require('express');
const router = express.Router();
const postController = require('../../controllers/postController');

router.route('/')
    .get(postController.getPosts);

module.exports = router;