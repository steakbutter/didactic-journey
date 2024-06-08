const notes = require('express').Router();
const dbJson = require('../db/db.json');


const uuid = require("../helpers/uuid");

// function to help read and write JSON file 
const { readFromFile, writeToFile} = require('../helpers/fsUtils');

// GET route for retrieving all notes
notes.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);

    readFromFile(dbJson).then((data) => res.json(JSON.parse(data)));
});

module.exports = notes;