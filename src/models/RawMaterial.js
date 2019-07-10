import Sequelize from 'sequelize';

import db from '../config/database';

/**
 * @swagger
 * definitions:
 *  RawMaterial:
 *    type: object
 *    required:
 *      - id
 *      - name
 *    properties:
 *      id:
 *        description: Identificador único
 *        type: integer
 *      name:
 *        description: Nome da matéria-prima
 *        maxLength: 100
 *        type: string
 *      quantity:
 *        description: Quantidade em estoque
 *        type: integer
 */
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
    defaultValue: 0,
    type: Sequelize.INTEGER,
  },
}, {
  freezeTableName: true,
  tableName: 'raw_materials',
});
