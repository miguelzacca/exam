import { Router } from 'express'
import * as controllers from '../controllers/productControllers.js'

const router = Router()

router.post('/create', controllers.createProduct)

router.delete('/clear', controllers.clearProducts)

router.get('/', controllers.getProducts)

router.patch('/update/:id', controllers.patchProduct)

export { router as productRoutes }
