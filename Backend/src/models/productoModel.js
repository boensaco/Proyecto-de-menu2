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
}

module.exports = ProductoModel
