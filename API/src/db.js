const sequelize = require('sequelize');

const database = new sequelize("mygamescore", 'sa', '123',
{
    dialect: 'mssql',
    host: 'localhost',
    port: 1433
});

database.sync();

module.exports = database;