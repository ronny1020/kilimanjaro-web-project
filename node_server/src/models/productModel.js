module.exports = (sequelize, Sequelize) => {
  const Products = sequelize.define(
    'products',
    {
      productID: {
        type: Sequelize.INTEGER(10),
        primaryKey: true,
      },
      ProductName: {
        type: Sequelize.STRING(40),
        unique: true,
      },
      sellerID: {
        type: Sequelize.STRING(5),
      },
      CategoryID: {
        type: Sequelize.INTEGER(10),
      },
      UnitPrice: {
        type: Sequelize.INTEGER(10),
      },
      UnitsInStock: {
        type: Sequelize.INTEGER(6),
      },
      add_time: {
        type: Sequelize.DATE,
      },
      specification: {
        type: Sequelize.TEXT('medium'),
      },
      description: {
        type: Sequelize.TEXT('medium'),
      },
    },
    {
      timestamps: false,
    },
    {
      underscored: true,
    }
  )

  return Products
}
