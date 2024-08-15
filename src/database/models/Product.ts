import { DataTypes } from 'sequelize'
import { db } from '../sequelize.js'

export const Product = db.define(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    pname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },

    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders',
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
  },
)
