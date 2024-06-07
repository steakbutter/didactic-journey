const notes = require('express').Router();

const uuid = require("../helpers/uuid");

// function to help read and write JSON file 
const { readFromFile, readAndAppend} = require('../helpers/fsUtils');

// GET route for retrieving all notes
notes.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});