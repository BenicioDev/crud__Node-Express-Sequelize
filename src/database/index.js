// conexão BD

const { Sequelize } = require('sequelize');

const configDB = require('../config/database')

// Chamando nosso arquivo User.Js com DataTypes
const User = require('../models/User')

const connection = new Sequelize(configDB)


// Utilizando conexão com model
User.init(connection)


module.exports = connection