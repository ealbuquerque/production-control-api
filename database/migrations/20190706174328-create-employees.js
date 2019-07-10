module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('employees', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    id_work_period: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'work_periods',
        key: 'id',
      },
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
  }),
  down: queryInterface => queryInterface.dropTable('employees'),
};
