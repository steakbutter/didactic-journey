const notes = require('express').Router();
// const express = require('express');
// const fs = require('fs');
// const app = express();
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

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for submitting notes
notes.post('/api/notes', (req,res) => {
    console.info(`${req.method} request received to submit notes`);
    // destructuring for items in req.body
    const {noteTitle, noteText} = req.body;
    if (req.body) {
        const newNote = {
            noteTitle,
            noteText,
            note_id: uniqueId(),
        };

    //     const noteString = JSON.stringify(newNote);
    //     fs.writeFile(`./db/${newNote.noteTitle, newNote.noteText, newNote.note_id}.json`, noteString, (err) =>
    //     err
    //     ? console.error(err)
    // : console.log(`Note for ${newNote.noteTitle} has been written`));

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added succesfully`);
} else {
    res.error('Error in adding note');
} 
});

module.exports = notes;