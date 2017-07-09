
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add'){
    var note=notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('New note created');
        logNote(note);
    }
    else console.log('Note with duplicate title');
} else if (command === 'list'){
    console.log('Listing notes');
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read'){
    console.log('Reading note');
    var note = notes.getNote(argv.title);
    if (note){
        console.log('Note found');
        logNote(note);
    }
    else console.log('Note not found');
} else if (command === 'remove'){
    console.log('Removing note');
    var noteRemoved=notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognised');
}

console.log('App finished');