import Product from '../services/Product';

import {
  database,
} from '../middlewares';

/**
 * Create new Product
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {Product}
 */
const create = (req, res) => {
  const { body } = req;

  Product.create(body)
    .then(database.createdHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 *  Destroy Product by id
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {*}
 */
const destroy = (req, res) => {
  const {
    params: {
      id,
    },
  } = req;

  Product.destroy(id)
    .then(database.rowsAffectedHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 * Find all the Products
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {List<Product>}
 */
const findAll = (req, res) => {
  Product.findAll()
    .then(database.dataHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 *  Find Product by id
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {Product}
 */
const findById = (req, res) => {
  const {
    currentUser,
    params: { id },
  } = req;

  Product.findById(id, currentUser)
    .then(database.dataHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 *  Update Product by id
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {Product}
 */
const update = (req, res) => {
  const {
    body,
    params: {
      id,
    },
  } = req;

  Product.update(id, body)
    .then(database.rowsAffectedHandler(req, res))
    .catch(database.errorHandler(req, res));
};

export default {
  create,
  destroy,
  findAll,
  findById,
  update,
};
