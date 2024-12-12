const { Router } = require ('express')
const transactionController = require ('../controllers/transactionController')
const { validateTransaction, validateTransactionId } = require('../middlewares')

const router = Router ()

// Create
router.post('/', validateTransactionId, transactionController.create)

// Update
router.get('/', validateTransaction, validateTransactionId, transactionController.update)

// Deelete
router.delete('/:id', validateTransaction, validateTransactionId, transactionController.delete)

// Read Only
router.get('/id', validateTransactionId, transactionController.getOne)

// Read All
router.get('/', transactionController.getAll)