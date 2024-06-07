const notes = require('express').Router();

const uuid = require("../helpers/uuid");

// function to help read and write JSON file 
const { readFromFile, readAndAppend} = require