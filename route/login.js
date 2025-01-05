const express = require('express');
const router = express.Router();
const loginUser = require('../controllers/loginController');

router.get('^/', loginUser);

module.exports = router;