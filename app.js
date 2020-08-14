const filesystem = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');

yargs.command({
    'command':'add',
    'describe':'Add a new note',
    handler: function(){
        console.log(chalk.green('New note added'));
    }
})

console.log(yargs.argv);
