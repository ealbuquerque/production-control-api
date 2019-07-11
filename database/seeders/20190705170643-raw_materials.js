const rawMaterialsJson = require('./data/rawMaterials.json');

module.exports = {
  up: queryInterface => queryInterface
    .bulkInsert(
      'raw_materials',
      rawMaterialsJson,
      {},
    ),
  down: queryInterface => queryInterface
    .bulkDelete(
      'raw_materials',
      null,
      {},
    ),
};
