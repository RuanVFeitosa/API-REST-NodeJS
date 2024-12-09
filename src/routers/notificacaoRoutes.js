const { Router } = require('express');
const admController = require ('../controllers/notifyController')
const { validateNotify, validateNotifyId} = require ('../middlewares')

const router = Router();

// Função de criar
router.post('/',validateNotify, notifyController.create);

// Função de editar
router.get('/',validateNotify, validateNotifyId, notifyController.update)

// Função de deletar
router.delete('/:id',validateNotify, validateNotifyId, notifyController.delete)

// Função buscar unico
router.get('/:id', validateNotifyId, notifyController.getOne)

// Função buscar todos
router.get('/', notifyController.getAll)

module.exports = router;