import { pool } from './db.js'

export const index = (req, res) => res.send('<h1>Bienvenido a mi API</h1>')

// Ruta: /products
export const getProducts = async (req, res) => {
  try {
    const [productos] = await pool.query('SELECT * FROM product LIMIT 100')
    res.json(productos)
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno', detail: error.message })
  }
}

export const getProductById = (req, res) => {
  res.send('Mostrando producto con el id ...')
}