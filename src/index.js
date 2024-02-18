const express = require('express')
const app = express()
const routes = require('./routes')

// Conexão BD
require('./database')

// Resposta tipo JSON
app.use(express.json())

// Usando nosso arquivo routes.js
app.use(routes)

// Porta
app.listen(3030)