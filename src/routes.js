const { Router } = require('express');

const UserController = require('./controller/UserController')

// Contém todos os métodos HTTP
const router = Router()


// Create
router.post('/create', UserController.createUser)
router.get('/read', UserController.listUsers)
router.put('/update/:id', UserController.updateUser)
router.delete('/delete/:id', UserController.deleteUser)



module.exports = router