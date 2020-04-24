module.exports = (sequelize, Sequelize) => {
  const Coupon = sequelize.define(
    'coupon',
    {
      couponID: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
      },
      couponName: {
        type: Sequelize.STRING(20),
      },
      minus: {
        type: Sequelize.INTEGER(11),
      },
      limitation: {
        type: Sequelize.INTEGER(11),
      },
      cpendDate: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      // modelName: 'singularName'
    },
    {
      underscored: true,
    }
  )

  return Coupon
}
