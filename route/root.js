const express = require('express')
const router = express.Router();
const postController = require('../controllers/postController');
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {
    console.log(`${req.method} request for ${req.url}...`);
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;