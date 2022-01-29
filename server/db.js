const { Sequelize, DataTypes, Model } = require('sequelize');

const db = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './k9friends.sqlite',
    logging: false
})

module.exports = { db, DataTypes, Model };
