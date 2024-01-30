const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.get('/api/tareas', (req, res)=> {
    res.send('Get Tareas')
})

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))
