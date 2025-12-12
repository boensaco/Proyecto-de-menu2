const express = require('express')
const cors = require('cors')
const app = express()
const productosRoutes = require('./routes/productosRoutes')

// Habilitar CORS
app.use(cors())

// necesario para leer JSON
app.use(express.json())

// usar el router
app.use('/api/productos', productosRoutes)

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})
