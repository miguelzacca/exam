import { Supplier } from '../database/models/Supplier.js'
import { Controller } from '../types/global.js'
import { handleHttpErrorResponse } from '../utils/handleHttpErrorResponse.js'
import { zodValidator } from '../utils/zodValidator.js'

export const createSupplier: Controller = async (req, res) => {
  try {
    const data = zodValidator(req.body, 'create_supplier')

    await Supplier.create(data)

    res.sendStatus(201)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}

export const patchSupplier: Controller = async (req, res) => {
  try {
    const { id } = req.params
    const data = zodValidator(req.body, 'patch_supplier')

    await Supplier.update(data, { where: { id } })

    res.sendStatus(200)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}

export const getSuppliers: Controller = async (req, res) => {
  try {
    const { name } = req.query

    const where = name ? { sname: name } : undefined

    const suppliers = await Supplier.findAll({
      where,
      attributes: {
        exclude: ['id'],
      },
    })

    res.status(200).json(suppliers)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}

export const clearSuppliers: Controller = async (req, res) => {
  try {
    await Supplier.destroy({ where: {} })
    res.sendStatus(200)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}
