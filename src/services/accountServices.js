const { where } = require('sequelize');
const Acc = require('../models/account');
const jwt = require('jsonwebtoken');

const accountService = {
    create: async (acc) => {
        try {
            const newAcc = await Acc.create(acc);
        } catch (error) {
            throw new Error('An error occurred while creating an account')
        }
    },
    update: async (id, accToUpdate) => {
        try {
            const acc = await Acc.findByPk(id)
            if (!acc) {
                return null;
            }
            await acc.update(accToUpdate)
            await acc.save()
            return acc
        } catch (error) {
            throw new Error('An error occurred while updating the account')
        }
    },
    getById: async (id) => {
        try {
            const acc = await Acc.findByPk(id)
            if (!acc) {
                return null;
            }
            return acc;
        } catch (error) {
            throw new Error('An error occurred while locating the account')
        }
    },
    getAll: async () => {
        try {
            return await Acc.findAll()
        } catch (error) {
            throw new Error('An error occurred while finding all account')
        }
    },
    delete: async (id) => {
        try {
            const acc = await Acc.findByPk(id)
            if (!acc) {
                return null;
            }
        } catch (error) {
            throw new Error('An error occurred while deleting the account');
            
        }
    }
}

module.exports = accountService