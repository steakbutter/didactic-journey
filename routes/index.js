const router = require('express').Router();

// import routes containing files
const notesRouter = require('./routes/notes');

router.use('/api/notes', notesRouter);

module.exports = router;
