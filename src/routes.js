const { Router } = require('express');
const User = require('./models/User')

// Contém todos os métodos HTTP
const router = Router()


// Create
router.post('/', async (req, res) =>{
       const {name, email, telefone} = req.body

       const user = await User.create({name, email, telefone})

       res.json({user})

})



module.exports = router