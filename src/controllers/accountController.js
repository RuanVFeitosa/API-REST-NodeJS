const accountService = require('../services/accountServices');

acconutControllers = {
    create: async (req, res) => {
        try {
            const acc = await accountService.create(req.body);
            return res.status(201).json({
                message: 'Account created successfully',
                acc
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Error when trying creating account'
            })
        }
    },

    update: async (req, res) => {
        try {
            const acc = await accountService.update(req.params.id, req.body)
            if (!acc) {
                return res.status(400).json({
                    message: 'Account not found'
                });
            }
            return res.status(200).json({
                message: 'Account updated successfully',
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Error when trying update account'
            })
        }
    },

    getAll: async (req, res) => {
        try {
            const accs = await accountService.getAll();
            return res.status(200).json({
                message: 'Accounts retrieved successfully',
                accs
            })
        } catch (error) {
            return res.status(500).json({
                message: 'An error occurred on the Server'
            })
        }
    },

    getOne: async (req, res) => {
        try {
            const acc = await accountService.getById(req.params.id)
            if (!acc) {
                return res.status(404).json({
                    message: 'Account not found'
                })
            }
            return res.status(200).json({
                message: 'Account retrieved successfully',
                acc
            })
        } catch (error) {
            return res.status(500).json({
                message: 'An error occurred on the Server'
            })
        }
    },

    delete: async (req, res) => {
        try {
            const acc = await accountService.delete(req.params.id)
            if (!acc) {
                return res.status(404).json({
                    message: 'Account not found'
                })
            }
            res.status(200).json({
                message: 'Account deleted successfully',
                acc
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: 'An error occurred on the Server'
            })
        }
    }
}

module.exports = acconutControllers; 