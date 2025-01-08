require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConfig');
const PORT = process.env.PORT || process.env.DEF_PORT;

// Connect to MongoDB
connectDB();

// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// Routing
app.use('/', require('./route/root'));
app.use('^(/posts)', require('./route/api/posts'));
app.use('^(/newPost)', require('./route/api/newPost'));
app.get('^(/error)', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'error.html'));
});

// Invalid paths to 404 page
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

// Open server
mongoose.connection.once('open', () => {
    console.log('Connected to database.');
    app.listen(PORT, () => console.log(`Server is running on local port ${PORT}...`));
});
