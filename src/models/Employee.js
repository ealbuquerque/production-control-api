import Sequelize from 'sequelize';

import WorkPeriod from './WorkPeriod';

import db from '../config/database';

const Employee = db.define('Employee', {
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
  idWorkPeriod: {
    field: 'id_work_period',
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: WorkPeriod,
      key: 'id',
    },
  },
}, {
  freezeTableName: true,
  tableName: 'employees',
});

Employee.belongsTo(WorkPeriod, {
  as: 'workPeriod',
  foreignKey: {
    field: 'id_work_period',
  },
  targetKey: 'id',
});

export default Employee;
