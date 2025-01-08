const Post = require('../model/Post');
const path = require('path');

// Get request for posts
const getPosts = async (req, res) => {
    const posts = await Post.find();
    posts.reverse();
    if (!posts) {
        console.log("Cannot find the data.");
        return res.status(205).json({ 'message': 'No posts' });
    }
    res.json(posts);
};

// Post request for posts
const createPost = async (req, res) => {
    if (!req?.body?.username) return res.status(400).json({ 'message': 'Must have username' });
    try {
        const result = await Post.create({
            username: req.body.username,
            date: new Date(),
            // image: "",
            content: req.body.tweet
        });
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.redirect('/error');
    }
};

module.exports = {
    getPosts,
    createPost
}