const notifyService = require('../services/notifyServices')

notifyControllers = {
    create: async (req, res) => {
        try {
            const notify = await notifyService.create(req.body)
            return res.status(201).json({
                message: 'Notification created successfully',
                notify
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Error when trying to create notification'
            })
        }
    },

    update: async (req, res) => {
        try {
            const notify = await notifyService.update(req.params.id, req.body)
            if (!notify) {
                return res.status(400).json({
                    message: 'Notification not found'
                })
            }
            return res.status(400).json({
                message: 'Notification updated successfully',
                notify
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Error when trying to update notification'
            })
        }
    },

    getAll: async (req, res) => {
        try {
            const notify = await notifyService.getAll();
            return res.status(200).json({
                message: 'Notifications retrieved successfully',
                notify
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Error when trying to retrieve notifications'
            })
        }
    },

    getOne: async (req, res) => {
        try {
            const notify = await notifyService.getById(req.params.id)
            if (!notify) {
                return res.status
            }
        } catch (error) {
            
        }
    }
}