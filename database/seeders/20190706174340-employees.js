const employeesJson = require('./data/employees.json');

module.exports = {
  up: queryInterface => queryInterface
    .bulkInsert(
      'employees',
      employeesJson,
      {},
    ),
  down: queryInterface => queryInterface
    .bulkDelete(
      'employees',
      null,
      {},
    ),
};
