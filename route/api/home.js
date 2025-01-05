const express = require('express')
const router = express.Router();
const postController = require('../../controllers/postController');
const path = require('path');


router.get('/', (req, res) => {
    if (!req?.query?.user) return res.sendStatus(401);
    if (req.query.user !== process.env.USER) return res.sendStatus(401);
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'home.html'));
});

router.post('/', postController.createPost);

module.exports = router;