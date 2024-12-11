const { DataTypes } = require('sequelize');
const sequelize = require("../config/database")

const adm = sequelize.define('adm', {
    id_User: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    balance: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true // Timestamps, para armazenar a hora que foi criado
});

module.exports = adm;