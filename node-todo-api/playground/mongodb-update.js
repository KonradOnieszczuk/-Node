const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5972246e839c0c591cdea68c')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5972180aed0a731c5de7dd62')
    }, {
        $set: {
            name: 'Blabla car'
        },
        $inc: {
            age: 1
        }
    },
        {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });

    });