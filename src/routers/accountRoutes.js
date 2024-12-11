const { Router } = require('express');
const accountController = require ('../controllers/accountController')
const { validateAccount, validateAccountId} = require ('../middlewares')

const router = Router();

// Função de criar
router.post('/', validateAccountId, accountController.create);

// Função de editar
router.get('/',validateAccount, validateAccountId, accountController.update)

// Função de deletar
router.delete('/:id',validateAccount, validateAccountId, accountController.delete)

// Função buscar unico
router.get('/:id', validateAccountId, accountController.getOne)

// Função buscar todos
router.get('/', accountController.getAll)

module.exports = router;