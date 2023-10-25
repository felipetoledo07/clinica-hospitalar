const express = require('express');
const routes = require('./routes');
const sequelize = require('./database')
const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

// database.User,sync({force: true});