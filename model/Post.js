const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Post', postSchema);