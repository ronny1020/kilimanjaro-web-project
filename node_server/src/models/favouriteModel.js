module.exports = (sequelize, Sequelize) => {
  const Favourites = sequelize.define(
    'favourites',
    {
      favouriteID: {
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
    },
    {
      underscored: true,
    }
  )

  return Favourites
}
