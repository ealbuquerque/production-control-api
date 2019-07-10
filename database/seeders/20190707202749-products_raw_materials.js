const productsRawMaterialsJson = require('./data/productsRawMaterials.json');

module.exports = {
  up: queryInterface => queryInterface
    .bulkInsert(
      'products_raw_materials',
      productsRawMaterialsJson,
      {},
    ),
  down: queryInterface => queryInterface
    .bulkDelete(
      'products_raw_materials',
      null,
      {},
    ),
};
