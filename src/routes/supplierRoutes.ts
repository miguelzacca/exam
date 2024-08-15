import { Router } from 'express'
import * as controllers from '../controllers/supplierControllers.js'

const router = Router()

router.post('/create', controllers.createSupplier)

router.delete('/clear', controllers.clearSuppliers)

router.get('/', controllers.getSuppliers)

router.patch('/update/:id', controllers.patchSupplier)

export { router as supplierRoutes }
