import { OrderAssociations } from './associations/OrderAssociations.js'
import { db } from './sequelize.js'

export const syncDb = async () => {
  try {
    await db.sync({
      // force: true,
    })
    OrderAssociations()
  } catch (err) {
    console.error(err)
    await db.close()
  }
}
