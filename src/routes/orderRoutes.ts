import { Router } from 'express'
import * as controllers from '../controllers/orderControllers.js'

const router = Router()

router.post('/create', controllers.createOrder)

router.delete('/clear', controllers.clearOrders)

router.get('/', controllers.getOrders)

router.patch('/update/:id', controllers.patchOrder)

export { router as orderRoutes }
