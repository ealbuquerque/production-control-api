module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('raw_materials', {
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
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }),
  down: queryInterface => queryInterface.dropTable('raw_materials'),
};
