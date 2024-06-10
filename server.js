const express = require('express');
const path = require('path');
// call Express
const app = express();
// call route
const noteR = require('./routes/notes');



// Define the PORT number
const PORT = process.env.PORT || 3001;

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

// GET and POST requests using the index.js from the routes folder
app.use('/api/notes', noteR);


// GET request for notes.html
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET request for index.html file
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);


// Listen to PORT
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);