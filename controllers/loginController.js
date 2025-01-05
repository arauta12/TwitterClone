const Post = require('../model/Post');
const path = require('path');

const loginUser = async (req, res) => {
    if (!req?.query?.user) return res.status(400).json({ 'message': 'Username is required.' });
    const userInput = req.query.user;
    const post = await Post.findOne({ username: userInput }).exec();

    // change to create new user
    if (!post) return res.sendStatus(401);

    process.env.USER = userInput;
    res.redirect('/success');
};

module.exports = loginUser;