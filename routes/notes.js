const notes = require('express').Router();

// Helper method for generating unique ids
const uniqueId = uuidv4();

// function to help read and write JSON file 
const { readFromFile, readAndAppend} = require('../helpers/fsUtils');

// GET route for retrieving all notes
notes.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for submitting notes
notes.post('/api/notes', (req,res) => {
    console.info(`${req.method} request received to submit notes`);
    // destructuring for items in req.body
    const {noteTitle, noteText} = req.body;
    if (noteTitle && noteText) {
        const newNote = {
            noteTitle,
            noteText,
            note_id: uniqueId(),
        };

        readAndAppend(newNote, './db/db.json');
        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting Notes');
    }
});

module.exports = notes;