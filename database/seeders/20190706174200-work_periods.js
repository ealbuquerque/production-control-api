const workPeriodsJson = require('./data/workPeriods.json');

module.exports = {
  up: queryInterface => queryInterface
    .bulkInsert(
      'work_periods',
      workPeriodsJson,
      {},
    ),
  down: queryInterface => queryInterface
    .bulkDelete(
      'work_periods',
      null,
      {},
    ),
};
