const fs = require('fs');
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
        },
        body: {
           describe: 'Body of note',
           demandOption: true,
           type: 'string',
        }
    },
    handler: function(argv){
        // console.log(chalk.green('New note added\n'))
        // console.log(`${chalk.green.bold("\tTitle\t\tBody")}`);
        // console.log("=========================================");
        // console.log( chalk.yellow.bold("\t"+argv.title+"\t\t"), argv.body);
        // fs.appendFileSync("notes.txt",`${argv.title} >>>>>>>> ${argv.body+"\n"}`);
        // console.log("content written to file synchronously");
        //calling function from notes
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

// console.log(yargs.argv);
