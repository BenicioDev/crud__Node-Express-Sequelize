const { Router } = require('express');

const UserController = require('./controller/UserController')

// Contém todos os métodos HTTP
const router = Router()


// Create
router.post('/create',UserController.createUser)
router.put('/update/:id',UserController.updateUser)



module.exports = router