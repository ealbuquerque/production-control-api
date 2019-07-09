import Sequelize from 'sequelize';

import Product from './Product';
import RawMaterial from './RawMaterial';

import db from '../config/database';

/**
 * @swagger
 * definitions:
 *  ProductRawMaterial:
 *    type: object
 *    required:
 *      - id
 *      - id_product
 *      - id_raw_material
 *    properties:
 *      id:
 *        description: Identificador único
 *        type: integer
 *      id_product:
 *        description: Id do relacionamento com Product
 *        type: integer
 *      id_raw_material:
 *        description: Id do relacionamento com RawMaterial
 *        type: integer
 */
const ProductRawMaterial = db.define('ProductRawMaterial', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  id_product: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  },
  id_raw_material: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: RawMaterial,
      key: 'id',
    },
  },
}, {
  freezeTableName: true,
  tableName: 'products_raw_materials',
});

Product.RawMaterial = Product.belongsToMany(RawMaterial, {
  as: 'rawMaterials',
  foreignKey: 'id_product',
  through: ProductRawMaterial,
});

RawMaterial.Product = RawMaterial.belongsToMany(Product, {
  as: 'products',
  foreignKey: 'id_raw_material',
  through: ProductRawMaterial,
});

export default ProductRawMaterial;
