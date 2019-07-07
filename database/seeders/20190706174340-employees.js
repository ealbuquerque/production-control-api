const rawMaterialsJson = require('./data/employees.json');

module.exports = {
  up: queryInterface => queryInterface
    .bulkInsert(
      'employees',
      rawMaterialsJson,
      {},
    ),
  down: queryInterface => queryInterface
    .bulkDelete(
      'employees',
      null,
      {},
    ),
};
