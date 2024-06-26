const express = require('express');
const router = express.Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET route for retreiving all notes
router.get('/', (req, res) => {
    readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for a new note
router.post('/', (req, res) => {
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



module.exports = router;


