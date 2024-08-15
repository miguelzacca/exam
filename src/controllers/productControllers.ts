import { Product } from '../database/models/Product.js'
import { Controller } from '../types/global.js'
import { handleHttpErrorResponse } from '../utils/handleHttpErrorResponse.js'
import { zodValidator } from '../utils/zodValidator.js'

export const createProduct: Controller = async (req, res) => {
  try {
    const data = zodValidator(req.body, 'create_product')

    await Product.create(data)

    res.sendStatus(201)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}

export const patchProduct: Controller = async (req, res) => {
  try {
    const { id } = req.params
    const data = zodValidator(req.body, 'patch_product')

    await Product.update(data, { where: { id } })

    res.sendStatus(200)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}

export const getProducts: Controller = async (req, res) => {
  try {
    const { name } = req.query

    const where = name ? { pname: name } : undefined

    const products = await Product.findAll({
      where,
      attributes: {
        exclude: ['id', 'orderId'],
      },
    })

    res.status(200).json(products)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}

export const clearProducts: Controller = async (req, res) => {
  try {
    await Product.destroy({ where: {} })
    res.sendStatus(200)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}
