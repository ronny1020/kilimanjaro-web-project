const dbConfig = require('../config/dbConfig.js')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.customers = require('./memberModel.js')(sequelize, Sequelize)
db.favourites = require('./favouriteModel.js')(sequelize, Sequelize)
db.products = require('./productModel.js')(sequelize, Sequelize)
db.coupon = require('./couponModel.js')(sequelize, Sequelize)
db.couponMap = require('./couponMapModel.js')(sequelize, Sequelize)
db.crams = require('./cramModel.js')(sequelize, Sequelize)

//Join table by foreign key: Reference
//https://dwatow.github.io/2018/09-24-sequelize/sequelize-associations/
//https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
db.favourites.belongsTo(db.products, { foreignKey: 'productID' })
db.products.hasMany(db.favourites, { foreignKey: 'productID' })

db.couponMap.belongsTo(db.coupon, { foreignKey: 'couponID' })
db.coupon.hasMany(db.couponMap, { foreignKey: 'couponID' })

// db.crams.belongsTo(db.customers, { foreignKey: 'customerID' })
// db.customers.hasMany(db.crams, { foreignKey: 'customerID' })

module.exports = db
