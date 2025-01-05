const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);