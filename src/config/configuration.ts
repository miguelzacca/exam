import { CorsOptions } from 'cors'
import { config as dotEnvConfig } from 'dotenv'

dotEnvConfig()

export const config = {
  get env() {
    return {
      PORT: Number(process.env.PORT),
      HOST: process.env.HOST,
      ORIGIN_HOST: process.env.ORIGIN_HOST,
      MYSQL_USER: process.env.MYSQL_USER,
      MYSQL_PASS: process.env.MYSQL_PASS,
      MYSQL_DB: process.env.MYSQL_DB,
    }
  },

  get cors() {
    return {
      origin: [this.env.ORIGIN_HOST],
      methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    } as CorsOptions
  },
}
