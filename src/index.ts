import express from 'express'
import { syncDb } from './database/syncDb.js'
import { config } from './config/configuration.js'
import cors from 'cors'
import { productRoutes } from './routes/productRoutes.js'
import { supplierRoutes } from './routes/supplierRoutes.js'
import { orderRoutes } from './routes/orderRoutes.js'

const app = express()

app.use(express.json())

app.use(cors(config.cors))

app.use('/products', productRoutes)
app.use('/suppliers', supplierRoutes)
app.use('/orders', orderRoutes)

syncDb().then(() => {
  const { PORT, HOST } = config.env

  app.listen(PORT, () => {
    console.log(`Running... ${HOST}`)
  })
})
