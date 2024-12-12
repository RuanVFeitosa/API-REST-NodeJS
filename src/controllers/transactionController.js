const transactionService = require('../services/transactionServices')

transactionController = {
    create: async (req, res) => {
        try {
            const transaction = await transactionService.create(req.body)
            return res.status(201).json({
                message: 'Transaction created successfully',
                transaction
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Error creating transaction',
            })
        }
    },

    update: async (req, res) => {
        try {
            const transaction = await transactionService.update(req.params.id, req.body)
            if (!transaction) {
                return res.status(404).json({
                    message: 'Transaction not found',
                })
            }
            return res.status(200).json({
                message: 'Transaction updated successfully',
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Error updating transaction',
            })
        }
    },

    getAll: async (req, res) => {
        try {
            const transactions = await transactionService.getAll()
            return res.status(200).json({
                message: ' Transactions retrieved successfully',
                transactions
            })
        } catch (error) {
            return res.status(500).json({
                message: 'An error occurred on the Server'
            })
        }
    },

    getOne: async (req, res) => {
        try {
            const transaction = await transactionService.getById(req.params.id)
            if (!transaction) {
                return res.status(404).json({
                    message: 'Transaction not found',
                })
            }
            return res.status(200).json({
                message: 'Transaction retrieved successfully',
            })
        } catch (error) {
            return res.status(500).json({
                message: 'An error occurred on the Server'
            })
        }
    },

    delete: async (req, res) => {
        try {
            const transaction = await transactionService.delete(req.params.id)
            if (!transaction) {
                return res.status(404).json({
                    message: 'Transaction not found',
                })
            }
            return res.status(200).json({
                message: 'Transaction deleted successfully',
                transaction
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: 'An error occurred on the Server'
            })
        }
    }
}

module.exports = transactionController;