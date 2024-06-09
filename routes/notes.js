const fs = require('fs');
const addNote = (req, res) => {
    const newNote = req.body;
    const uuid = require('../helpers/uuid');
    
    // Read existing notes from the db.json file
    let notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    
    // Assign a unique id to new note
    newNote.id = uuid;
    
    // Push new note to the notes array
    notes.push(newNote);
    
    // Write new note to db.json
    fs.writeFileSync('db/db.json', JSON.stringify(notes, null, 2));
    res.json(newNote);   
};
    

module.exports = { addNote };