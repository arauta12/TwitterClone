const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    profileImg: {
        type: Buffer,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: Buffer,
        required: false
    },
    content: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('TwitterClone.Posts', postSchema);