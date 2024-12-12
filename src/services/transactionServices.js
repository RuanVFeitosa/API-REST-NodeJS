const { where } = require('sequelize')
const Transaction = require('../models/transaction')
const jwt = require('jsonwebtoken')

const transactionService = {
    create: async (transaction) => {
        try {
            return await Transaction.create(transaction)
        } catch (error) {
            throw new Error('An error ocurred while creating an transaction');
            
        }  
    },

    update: async (id, transactionToUpdate) => {
        try {
            const transaction = await Transaction.findByPk(id)
            if (!transaction) {
                return null;
            }
            await transaction.update(transactionToUpdate)
            await transaction.save()
            return transaction
        } catch (error) {
            throw new Error("An error ocurred while updating an transaction");
            
        }
    },

    getById: async (id) => {
        try {
            const transaction = await Transaction.findByPk(id)
            if (!transaction) {
                return null
            }
            return transaction;
        } catch (error) {
            throw new Error('An error ocurred while getting an transaction');
        }
    },

    getAll: async () => {
        try {
            return await Transaction.findAll()
        } catch (error) {
            throw new Error('An error ocurred while finding all transaction')
        }
    },

    delete: async (id) => {
        try {
            const transaction = await Transaction.findByPk(id)
            if (!transaction) {
                return null
            }
        } catch (error) {
            throw new Error('An error ocurred while deleting the transaction');
            
        }
    }
}

module.exports = transactionService