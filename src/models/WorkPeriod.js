import Sequelize from 'sequelize';

import db from '../config/database';

/**
 * @swagger
 * definitions:
 *  WorkPeriod:
 *    type: object
 *    required:
 *      - id
 *      - value
 *    properties:
 *      id:
 *        description: Identificador único
 *        type: integer
 *      value:
 *        description: Jornada de trabalho em horas
 *        pattern: '^[1-9]h$'
 *        type: string
 */
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
