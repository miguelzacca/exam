import { Order } from '../models/Order.js'
import { Product } from '../models/Product.js'
import { Supplier } from '../models/Supplier.js'

export const OrderAssociations = () => {
  Order.hasMany(Product, {
    foreignKey: 'orderId',
  })

  Product.belongsTo(Order, {
    foreignKey: 'orderId',
  })

  Supplier.hasMany(Order, {
    foreignKey: 'supplierId',
  })

  Order.belongsTo(Supplier, {
    foreignKey: 'supplierId',
  })
}
