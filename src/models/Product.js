import Sequelize from 'sequelize';

import Employee from './Employee';

import db from '../config/database';

const Product = db.define('Product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  idEmployee: {
    field: 'id_employee',
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: Employee,
      key: 'id',
    },
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING(100),
  },
}, {
  freezeTableName: true,
  tableName: 'products',
});

Product.Employee = Product.belongsTo(Employee, {
  as: 'employee',
  foreignKey: {
    field: 'id_employee',
  },
  targetKey: 'id',
});

export default Product;
