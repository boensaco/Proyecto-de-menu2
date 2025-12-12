const Model = require('../models/productoModel')

class ProductoController {
    // GET - obtener todos los productos
    static async obtenerProductos(req, res) {
        try {
            const productos = await Model.obtenerProductos()
            res.json({
                success: true,
                data: productos
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Error al obtener los productos"
            })
        }
    }

    // GET - obtener producto por ID
    static async obtenerPorId(req, res) {
        try {
            const { id } = req.params
            const producto = await Model.obtenerPorId(id)

            if (producto.length === 0) {
                return res.status(404).json({
                    success: false,
                    mensaje: 'El producto no existe'
                })
            }

            // Enviar solo el objeto, no el array
            res.json({
                success: true,
                data: producto[0]
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Error al obtener el producto"
            })
        }
    }

    // POST - insertar un nuevo producto
    static async insertarProducto(req, res) {
        try {
            const { nombre, descripcion, precio, categoria } = req.body

            if (!nombre || !descripcion || !precio || !categoria) {
                return res.status(400).json({
                    success: false,
                    error: "Todos los campos son requeridos"
                })
            }

            const insertId = await Model.insertarProducto({ nombre, descripcion, precio, categoria })

            res.status(201).json({
                success: true,
                message: "Producto insertado correctamente",
                data: { id: insertId }
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Error al insertar el producto"
            })
        }
    }
}

module.exports = ProductoController
