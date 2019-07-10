module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('products_raw_materials', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    id_product: {
      allowNull: false,
      references: {
        model: 'products',
        key: 'id',
      },
      onDelete: 'CASCADE',
      type: DataTypes.INTEGER,
    },
    id_raw_material: {
      allowNull: false,
      references: {
        model: 'raw_materials',
        key: 'id',
      },
      onDelete: 'CASCADE',
      type: DataTypes.INTEGER,
    },
  }),
  down: queryInterface => queryInterface.dropTable('products_raw_materials'),
};
