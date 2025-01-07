const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/', (req, res) => {
    console.log(`${req.method} for /newPost${req.url}...`);
    try {
        res.sendFile(path.join(__dirname, '..', '..', 'views', 'newPost.html'));
    } catch (err) {
        console.log('File sending error');
        console.log(err.message);
    }
});

module.exports = router;