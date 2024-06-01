const express = require('express');
const path = require('path');
const fs = require('fs');
const notes = require('./db/db.json')
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');
// Define the PORT number
const PORT = process.env.PORT || 3001;
// call Express
const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// GET request for notes.html
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET request for index.html file
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET request to read db.json file
app.get('/api/notes', (req, res => {
    console.info(`${req.method} request received to get notes`);
    return res.json(notes);
}));



// Listen to PORT
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );