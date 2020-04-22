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
      },
      cAccount: {
        type: Sequelize.STRING(20),
      },
      cEmail: {
        type: Sequelize.STRING(20),
      },
      cPassword: {
        type: Sequelize.STRING(100),
      },
      cSex: {
        type: Sequelize.ENUM('F', 'M'),
      },
      cBirthDate: {
        type: Sequelize.DATE,
      },
      cAddress: {
        type: Sequelize.STRING(60),
      },
      cMobile: {
        type: Sequelize.STRING(24),
      },
    },
    {
      timestamps: false,
    }
  )

  return Customers
}
