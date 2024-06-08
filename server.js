const express = require('express');
const path = require('path');
const api = require('./routes/index');



// Define the PORT number
const PORT = process.env.PORT || 3001;
// call Express
const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

// GET request for notes.html
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET request for index.html file
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Send all the requests that begin with /api to the index.js in routes folder
app.use('/api', api);

// Listen to PORT
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );