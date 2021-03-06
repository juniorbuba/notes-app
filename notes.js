const fs = require('fs');
const chalk = require('chalk');

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    });

    if(duplicateNotes.length === 0){
        notes.push({
                title: title,
                body: body
            });
            console.log(notes);
            saveNotes(notes);
            console.log(chalk.green.inverse.bold('Note saved'));
    }else{
        console.log(chalk.red('Title taken, choose another'));
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function(){
    try{
        const existingData = fs.readFileSync('notes.json');
        const dataToString = existingData.toString();
        return JSON.parse(dataToString);
    } catch(e) {
        return [];
    }
    
}

const deleteNote = function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note){
        return note.title !== title;
    });

    
    if(notes.length > notesToKeep.length){
        console.log(chalk.green(`Note with title: ${title} has been deleted`));
        saveNotes(notesToKeep);
    }else{
        console.log(chalk.red('No note removed'));
    }
}   
    //refactor to arrow fxn later
    const listNotes = function(){
        console.log(chalk.yellow('Listing all notes...'));
        console.log(loadNotes());
        console.log(chalk.green('Done Listing'));
    }

    const readNote = function(title) {
        const notes = loadNotes();
        const note = notes.find((note) => note.title === title);
        if(note){
            console.log(`${chalk.green.bold("\tTitle\t\tBody")}`);
            console.log("=========================================");
            console.log(chalk.green(`\t${note.title}\t\t${note.body}`));
        }else{
            console.log(chalk.red("Note not found"));
        }
    }

module.exports = {
    addNote: addNote,
    deleteNote: deleteNote,
    listNotes: listNotes,
    readNote: readNote
};