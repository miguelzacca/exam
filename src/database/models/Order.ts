import { DataTypes } from 'sequelize'
import { db } from '../sequelize.js'

export const Order = db.define(
  'Order',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    order_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    pname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    supplierId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Suppliers',
        key: 'id',
      },
    },
  },
  {
    updatedAt: false,
  },
)
