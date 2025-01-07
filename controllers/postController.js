const Post = require('../model/Post');
const path = require('path');

// FIXME: display no posts page instead of json message
const getPosts = async (req, res) => {
    const posts = await Post.find();
    posts.reverse();
    if (!posts) {
        console.log("Cannot find the data.");
        return res.status(205).json({ 'message': 'No posts' });
    }
    res.json(posts);
};

const createPost = async (req, res) => {
    // Improve to another html page with back link?
    if (!req?.body?.username) return res.status(400).json({ 'message': 'Must have username' });
    const postDate = new Date();

    try {
        const result = await Post.create({
            username: req.body.username,
            date: postDate,
            image: "",
            content: req.body.tweet
        });
        res.redirect('/');
    } catch (err) {
        console.error(err);
        console.log('Could not create the post. Try again.');
    }
};

module.exports = {
    getPosts,
    createPost
}