import Sequelize from 'sequelize';

import db from '../config/database';

export default db.define('WorkPeriod', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  value: {
    allowNull: false,
    type: Sequelize.STRING(2),
  },
}, {
  freezeTableName: true,
  tableName: 'work_periods',
});
