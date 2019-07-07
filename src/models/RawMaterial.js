import Sequelize from 'sequelize';

import db from '../config/database';

export default db.define('RawMaterial', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING(100),
  },
  quantity: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
}, {
  freezeTableName: true,
  tableName: 'raw_materials',
});
