const sequelize = require('sequelize');

const database = require('../db');
const schema = "";

class Registro extends sequelize.Model{}

Registro.init(
    {
        Codigo:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        Data:{
            type: sequelize.DATE,
            allowNull: false,
        },
        Pontos:{
            type: sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: database, modelName: 'tbRegistros', schema
    }
)

module.exports = Registro;