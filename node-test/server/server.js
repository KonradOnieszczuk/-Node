const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    })
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {name: 'Konrad', age: 22},
        {name: 'Tomasz', age:18},
        {name: 'Józek', age: 45}
    ])
});

app.listen(3000);

module.exports.app = app;