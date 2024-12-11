const { DataTypes } = require('sequelize');
const sequelize = require("../config/database")

const adm = sequelize.define('adm', {
    menssage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateNotify: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true // Timestamps, para armazenar a hora que foi criado
});

module.exports = adm;