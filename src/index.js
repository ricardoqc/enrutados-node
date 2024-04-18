import express from 'express'
import { getProductById, getProducts, index } from './controller.js'

const app = express()

app.get('/', index)
app.get('/products', getProducts)
app.get('/products/:id', getProductById)

app.listen(3000, () => console.log('Servidor ejecutándose en http://localhost:3000'))