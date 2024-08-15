import { DataTypes } from 'sequelize'
import { db } from '../sequelize.js'

export const Supplier = db.define(
  'Supplier',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    sname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },

    cnpj: {
      type: DataTypes.STRING(14),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
)
