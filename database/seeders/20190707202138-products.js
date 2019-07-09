const productsJson = require('./data/products.json');

module.exports = {
  up: queryInterface => queryInterface
    .bulkInsert(
      'products',
      productsJson,
      {},
    ),
  down: queryInterface => queryInterface
    .bulkDelete(
      'products',
      null,
      {},
    ),
};
