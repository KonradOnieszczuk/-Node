const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '597263fb5add27512524e67d11';
//
// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var id = '59724ddb0224712feda747ef';

User.findById(id).then((user) => {
    if (!user){
        return console.log('Id not found');
    }
    console.log('User by id', user);
}).catch((e) => {
   console.log(e);
});



