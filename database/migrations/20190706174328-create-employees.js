module.exports = {
  up: (queryInterface, DataTypes) => Promise.all([
    queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      id_work_period: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'work_periods',
          key: 'id',
        },
      },
    }),
  ]),
  down: queryInterface => queryInterface.dropTable('employees'),
};
