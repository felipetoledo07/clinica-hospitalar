const Sequelize = require('sequelize');
const sequelize = new Sequelize('clinicaHospitalar', 'root', 'bella302', {
    host: "localhost",
    dialect: "mysql"
});

const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
})


module.exports = sequelize;