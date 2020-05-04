module.exports = (sequelize, Sequelize) => {
  const Crams = sequelize.define(
    'crams',
    {
      cramID: {
        type: Sequelize.INTEGER(10),
        autoIncrement: true,
        primaryKey: true,
      },
      customerID: {
        type: Sequelize.STRING(5),
      },
      cDate: {
        type: Sequelize.DATE,
      },
      cramContent: {
        type: Sequelize.STRING(300),
      },
      cChecked: {
        type: Sequelize.ENUM('Y', 'N'),
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

  return Crams
}
