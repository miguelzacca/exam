import { Order } from '../models/Order.js'
import { Product } from '../models/Product.js'
import { Supplier } from '../models/Supplier.js'

export const OrderAssociations = () => {
  Order.hasMany(Product, {
    foreignKey: 'orderId',
    as: 'products',
  })

  Product.belongsTo(Order, {
    foreignKey: 'orderId',
    as: 'order',
  })

  Supplier.hasMany(Order, {
    foreignKey: 'supplierId',
    as: 'orders',
  })

  Order.belongsTo(Supplier, {
    foreignKey: 'supplierId',
    as: 'supplier',
  })
}
