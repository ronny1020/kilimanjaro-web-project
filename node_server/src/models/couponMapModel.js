module.exports = (sequelize, Sequelize) => {
  const CouponMap = sequelize.define(
    'couponmap',
    {
      couponMapId: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
      },
      couponID: {
        type: Sequelize.INTEGER(11),
      },
      customerID: {
        type: Sequelize.STRING(5),
      },
      valid: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      timestamps: false,
      timestamps: false,
      freezeTableName: true,
      // modelName: 'singularName'
    },
    {
      underscored: true,
    }
  )

  return CouponMap
}
