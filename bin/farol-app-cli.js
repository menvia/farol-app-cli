#!/usr/bin/env node

// Delete the 0 and 1 argument (node and script.js)
const args = process.argv.splice(process.execArgv.length + 2);

const myLibrary = require('../lib/index.js');

// Displays the text in the console
myLibrary.run(args);
