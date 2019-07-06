module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('RawMaterial', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
  }, {
    freezeTableName: true,
    tableName: 'raw_materials',
  });

  return User;
};
