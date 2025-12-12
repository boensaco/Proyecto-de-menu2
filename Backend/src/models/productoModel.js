const DB = require('../config/database')

class ProductoModel {
    // Obtener todos los productos
    static async obtenerProductos() {
        const [rows] = await DB.query('SELECT * FROM ProductosReposteria')
        return rows
    }

    // Obtener 1 producto por ID
    static async obtenerPorId(id) {
        const [row] = await DB.query('SELECT * FROM ProductosReposteria WHERE Id = ?', [id])
        return row
    }

    // Insertar un nuevo producto
    static async insertarProducto(data) {
        const { nombre, descripcion, precio, categoria } = data
        const [result] = await DB.query('INSERT INTO ProductosReposteria (Nombre, Descripcion, Precio, Categoria) VALUES (?, ?, ?, ?)', [nombre, descripcion, precio, categoria])
        return result.insertId
    }
}

module.exports = ProductoModel
