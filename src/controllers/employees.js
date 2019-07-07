import Employee from '../services/Employee';

import {
  database,
} from '../middlewares';

/**
 * Create new Employee
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {Employee}
 */
const create = (req, res) => {
  const { body } = req;

  Employee.create(body)
    .then(database.createdHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 *  Destroy Employee by id
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

  Employee.destroy(id)
    .then(database.rowsAffectedHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 * Find all the Employees
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {List<Employee>}
 */
const findAll = (req, res) => {
  Employee.findAll()
    .then(database.dataHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 *  Find Employee by id
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {Employee}
 */
const findById = (req, res) => {
  const {
    currentUser,
    params: { id },
  } = req;

  Employee.findById(id, currentUser)
    .then(database.dataHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 *  Update Employee by id
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {Employee}
 */
const update = (req, res) => {
  const {
    body,
    params: {
      id,
    },
  } = req;

  Employee.update(id, body)
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
