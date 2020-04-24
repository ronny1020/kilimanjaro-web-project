const dbConfig = require("../config/dbConfig.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require("./memberModel.js")(sequelize, Sequelize);
db.favourites = require("./favouriteModel.js")(sequelize, Sequelize);
db.products = require("./productModel.js")(sequelize, Sequelize);

db.favourites.belongsTo(db.products)
db.products.hasMany(db.favourites)

module.exports = db;