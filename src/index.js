const express = require('express')
const app = express()
const routes = require('./routes')

// Resposta tipo JSON
app.use(express.json())

// Usando nosso arquivo routes.js
app.use(routes)

// Porta
app.listen(3030)