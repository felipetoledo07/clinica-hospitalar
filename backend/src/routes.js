const express = require('express');

const routes = express.Router();

const users = [{
    id: 1,
    name: 'Felipe',
    username: 'felipe',
    password: '12345'
}];

routes.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if(user) {
        res.status(200).json(user);
    }

    res.status(401).json({message : 'Invalid credencials'});

})

module.exports = routes;