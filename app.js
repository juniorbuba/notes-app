const filesystem = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');
const { demandOption } = require('yargs');

yargs.command({
    'command':'add',
    'describe':'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv){
        console.log(chalk.green('New note added'), argv);
    }
});

yargs.command({
    'command':'delete',
    'describe':'Deletes an existing note',
    builder: {
        title: {
            describe: 'Note title'
        }
    },
    handler: function(argv){
        console.log(chalk.green('Removed existing note'));
    }
});

yargs.command({
    'command':'read',
    'describe':'Reads an existing note',
    handler: function(){
        console.log(chalk.green('Read an existing note'));
    }
});

yargs.command({
    'command':'list',
    'describe':'Lists all existing notes',
    handler: function(){
        console.log(chalk.green('Listed all existing notes'));
    }
});

yargs.parse();

console.log(yargs.argv);
