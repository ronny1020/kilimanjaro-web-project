module.exports = (sequelize, Sequelize) => {
  const Customers = sequelize.define(
    'favourites',
    {
      favourtieID: {
        type: Sequelize.INTEGER(10),
        primaryKey: true,
      },
      customerID: {
        type: Sequelize.STRING(5),
        unique: false, //可重複
      },
      productID: {
        type: Sequelize.INTEGER(10),
        unique: false,
      },
    },
    {
      timestamps: false,
    }
  )

  return Customers
}
