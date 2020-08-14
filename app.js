const filesystem = require('fs');
const chalk = require('chalk');
const notes = require('./notes.js');

// filesystem.writeFileSync('notes.txt', 'File has been created and line written in by node\n My name is moh btw');
// console.log(chalk.green.bold.inverse('File created!'));

// filesystem.appendFileSync('notes.txt', '\nThis line is being appended to the existing one in the .txt file');

// let notesVar = notes();
// // console.log(notesVar);
// console.log(chalk.red.underline('Connection failed'));

// console.log(chalk.green(process.argv[2]));
console.log(process.argv);
const command = process.argv[2];
if(command === "add"){
    console.log("Adding note");
}else if(command === "delete"){
    console.log("Deleting note");
}else{
    console.log(`Unrecognized command\nAvailable Commands are add & delete`);
}