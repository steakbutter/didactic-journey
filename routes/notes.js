const note = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET route for retreiving all notes
note.get('/', (req, res) => {
    readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for a new note
note.post('/', (req, res) => {
    console.log(req.body);

    const { title, text, nNote } = req.body;

    if(req.body) {
        const newNote = {
            title,
            text,
            nNote,
            nNote_id: uuid(),
        };

        readAndAppend(newNote, 'db/db.json');
        res.json('note added succesfully');
    } else {
        res.error('Error in adding note');
    }
});

module.exports = note;


// const addNote = (req, res) => {
//     const newNote = req.body;
    
//     // Read existing notes from the db.json file
//     let notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    
//     // Assign a unique id to new note
//     newNote.id = uuid;
    
//     // Push new note to the notes array
//     notes.push(newNote);
    
//     // Write new note to db.json
//     fs.writeFileSync('db/db.json', JSON.stringify(notes, null, 2));
//     res.json(newNote);   
// };
    

// module.exports = { addNote };

// const notes = require('express').Router();
// // const express = require('express');
// // const fs = require('fs');
// // const app = express();
// // Helper method for generating unique ids
// const uniqueId = require('uuid');

// // function to help read and write JSON file 
// const { readFromFile, readAndAppend} = require('../helpers/fsUtils');

// // // Read from db.json file
// // app.get('/api/notes', (req, res) => {
// //     fs.readFile('db\db.json', 'utf8', (err, data) => {
// //         if (err) {
// //             console.error(err);
// //             return res.status(500).send('Error reading db.json file');
// //         }

// //         const notes2 = JSON.parse(data);
// //         res.json(notes2);
// //     });
// // });


// // GET route for retrieving all notes
// notes.get('/api/notes', (req, res) => {
//     console.info(`${req.method} request received for notes`);

//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// // POST route for submitting notes
// notes.post('/api/notes', (req,res) => {
//     console.info(`${req.method} request received to submit notes`);
//     // destructuring for items in req.body
//     const {noteTitle, noteText} = req.body;
//     if (req.body) {
//         const newNote = {
//             noteTitle,
//             noteText,
//             note_id: uniqueId(),
//         };

//     //     const noteString = JSON.stringify(newNote);
//     //     fs.writeFile(`./db/${newNote.noteTitle, newNote.noteText, newNote.note_id}.json`, noteString, (err) =>
//     //     err
//     //     ? console.error(err)
//     // : console.log(`Note for ${newNote.noteTitle} has been written`));

//         readAndAppend(newNote, './db/db.json');
//         res.json(`Note added succesfully`);
// } else {
//     res.error('Error in adding note');
// } 
// });