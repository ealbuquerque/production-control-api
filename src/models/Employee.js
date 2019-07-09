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
  idWorkPeriod: {
    allowNull: false,
    field: 'id_work_period',
    references: {
      model: WorkPeriod,
      key: 'id',
    },
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING(100),
  },
}, {
  freezeTableName: true,
  tableName: 'employees',
});

Employee.WorkPeriod = Employee.belongsTo(WorkPeriod, {
  as: 'workPeriod',
  foreignKey: {
    field: 'id_work_period',
  },
  targetKey: 'id',
});

export default Employee;
