const { DataTypes, Transaction } = require('sequelize')
const sequelize = require('../config/database')

const Transaction = sequelize.define('Trasaction', {
    id_Account: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    accountType: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    transactionType: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    value: {
        type: DataTypes.NUMBER,
        allowNull: false
    },

    date_Transaction: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Transaction