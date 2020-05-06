module.exports = (sequelize, Sequelize) => {
  const Customers = sequelize.define(
    'customers',
    {
      customerID: {
        type: Sequelize.STRING(5),
        primaryKey: true,
      },
      cName: {
        type: Sequelize.STRING(20),
        unique: false //可重複
      },
      cAccount: {
        type: Sequelize.STRING(20),
        unique: true //不可重複
      },
      cEmail: {
        type: Sequelize.STRING(40),
        unique: true
      },
      cPassword: {
        type: Sequelize.STRING(100),
        unique: false 
      },
      cSex: {
        type: Sequelize.ENUM('F', 'M'),
      },
      cBirthDate: {
        type: Sequelize.DATE,
        unique: false
      },
      cAddress: {
        type: Sequelize.STRING(60),
        unique: false
      },
      cMobile: {
        type: Sequelize.STRING(24),
        unique: false
      },
      rewardsPoints: {
        type: Sequelize.INTEGER(11),
        defaultValue: 0
      },
    },
    {
      timestamps: false,
    }
  )

  return Customers
}
