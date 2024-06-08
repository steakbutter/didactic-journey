const notes = require('express').Router();
const express = require('express');
const fs = require('fs');
const app = express();
// Helper method for generating unique ids
const uniqueId = require('uuid');

// function to help read and write JSON file 
const { readFromFile, readAndAppend} = require('../helpers/fsUtils');

// // Read from db.json file
// app.get('/api/notes', (req, res) => {
//     fs.readFile('db\db.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send('Error reading db.json file');
//         }

//         const notes2 = JSON.parse(data);
//         res.json(notes2);
//     });
// });


// GET route for retrieving all notes
notes.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);

    readFromFile('db\db.json').then((data) => res.json(JSON.parse(data)));
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

        readAndAppend(newNote, 'db\db.json');
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