// var obj = {
//   name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);


// var personString = '{"name": "Andrew", "age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

// const fs = require('fs');
//
// var originalNote = {
//     title: 'Some title',
//     body: 'Some body'
// };
//
// var originalNoteString = JSON.stringify(originalNote);
// fs.writeFileSync('notes.json', originalNoteString);
//
// var noteString = fs.readFileSync('notes.json');var note = JSON.parse(noteString);
//
// console.log(typeof note);
// console.log(typeof note.title);

class Test {
    constructor (x, y){
        this.x = x;
        this.y = y;
    }
}

console.log(Test.prototype);