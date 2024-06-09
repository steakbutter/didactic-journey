const express = require('express');
const router = express.Router();
const fs = require('fs');
const noteRouter = require('../routes/notes');

router.get('/', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
            return;
        }
        const notes = JSON.parse(data);
        res.json(notes);
    });
});

router.use('/', noteRouter);

module.exports = router;
