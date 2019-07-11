module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    id_employee: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'employees',
        key: 'id',
      },
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
  }),
  down: queryInterface => queryInterface.dropTable('products'),
};
