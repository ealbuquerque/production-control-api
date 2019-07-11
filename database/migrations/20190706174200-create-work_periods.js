module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('work_periods', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    value: {
      allowNull: false,
      type: DataTypes.STRING(2),
    },
  }),
  down: queryInterface => queryInterface.dropTable('work_periods'),
};
