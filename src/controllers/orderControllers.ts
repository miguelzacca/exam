import { Order } from '../database/models/Order.js'
import { Controller } from '../types/global.js'
import { handleHttpErrorResponse } from '../utils/handleHttpErrorResponse.js'
import { zodValidator } from '../utils/zodValidator.js'

export const createOrder: Controller = async (req, res) => {
  try {
    const data = zodValidator(req.body, 'create_order')

    await Order.create(data)

    res.sendStatus(201)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}

export const patchOrder: Controller = async (req, res) => {
  try {
    const { id } = req.params
    const data = zodValidator(req.body, 'patch_order')

    await Order.update(data, { where: { id } })

    res.sendStatus(200)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}

export const getOrders: Controller = async (req, res) => {
  try {
    const { id } = req.query

    const where = id ? { order_number: id } : undefined

    const suppliers = await Order.findAll({
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

export const clearOrders: Controller = async (req, res) => {
  try {
    await Order.destroy({ where: {} })
    res.sendStatus(200)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}
