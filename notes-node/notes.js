const fs = require('fs');
const _ = require('lodash');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var remove = (title) => {
    var notes = fetchNotes();
    //_.remove(notes, (note) => note.title === title);
    var filteredNotes = notes.filter((note) => note.title !== title);
    //saveNotes(notes);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (title, body) =>{
    console.log('--');
    console.log(`Title: ${title}`);
    console.log(`Body: ${body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remove,
    logNote
};