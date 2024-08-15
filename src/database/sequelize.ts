import { Sequelize } from 'sequelize'
import { config } from '../config/configuration.js'

const { MYSQL_USER, MYSQL_PASS, MYSQL_DB } = config.env

export const db = new Sequelize({
  username: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DB,
  logging: false,
  dialect: 'mysql',
})
