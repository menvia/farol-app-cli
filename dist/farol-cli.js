#!/usr/bin/env node
// Delete the 0 and 1 argument (node and script.js)
var args = process.argv.splice(process.execArgv.length + 2);
var myLibrary = require('../lib/index.js');
var availableCommands = [
    'build',
    'checkout',
    'create',
    'deploy',
    'promote',
    'publish',
    'setup',
    'store'
];
if (args[0] === 'init') {
    myLibrary.init();
}
else if (availableCommands.includes(args[0])) {
    myLibrary.run(args);
}
else {
    myLibrary.notSupported();
}
