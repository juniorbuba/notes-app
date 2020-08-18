const fs = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');
const moh = require('./author');
const { demandOption } = require('yargs');

yargs.command({
    'command':'add',
    'describe':'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
           describe: 'Body of note',
           demandOption: true,
           type: 'string',
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    'command':'delete',
    'describe':'Deletes an existing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        },
    },
    handler: function(argv){
        notes.deleteNote(argv.title);
    }
});

yargs.command({
    'command':'read',
    'describe':'Reads an existing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        },
    },
    handler: function(argv){
        notes.readNote(argv.title);
    }
});

yargs.command({
    'command':'list',
    'describe':'Lists all existing notes',
    handler: function(){
        notes.listNotes();
    }
});

yargs.command({
    'command':'author',
    'describe':'About the author',
    handler: function(){
        moh.aboutMoh();
    }
});

yargs.parse();

// console.log(yargs.argv);
