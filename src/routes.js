const { Router } = require("express");

// Contém todos os métodos HTTP
const router = Router()


// Testando as rotas
router.get('/', (req, res) =>{
       res.json({teste:'rotas'})
})



module.exports = router