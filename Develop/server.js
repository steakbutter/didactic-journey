const express = require('express');
const path = require('path');
const fs = require('fs');

// Define the PORT number
const PORT = 3001;
// call Express
const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

