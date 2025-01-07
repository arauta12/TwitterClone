// FIXME: css for footer(*), latest tweets, images in tweets, other options...

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConfig');
const PORT = process.env.PORT || process.env.DEF_PORT;


connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/', require('./route/root'));
app.use('^(/posts)', require('./route/api/posts'));
app.use('^(/newPost)', require('./route/api/newPost'));

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found"})
    } else {
        res.type('txt').send("404 Not Found");
    }
});

mongoose.connection.once('open', () => {
    console.log('Connected to database.');
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
});
