import WorkPeriod from '../services/WorkPeriod';

import {
  database,
} from '../middlewares';

/**
 * Create new WorkPeriod
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {WorkPeriod}
 */
const create = (req, res) => {
  const { body } = req;

  WorkPeriod.create(body)
    .then(database.createdHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 *  Destroy WorkPeriod by id
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

  WorkPeriod.destroy(id)
    .then(database.rowsAffectedHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 * Find all the WorkPeriods
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {List<WorkPeriod>}
 */
const findAll = (req, res) => {
  WorkPeriod.findAll()
    .then(database.dataHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 *  Find WorkPeriod by id
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {WorkPeriod}
 */
const findById = (req, res) => {
  const {
    currentUser,
    params: { id },
  } = req;

  WorkPeriod.findById(id, currentUser)
    .then(database.dataHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 *  Update WorkPeriod by id
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {WorkPeriod}
 */
const update = (req, res) => {
  const {
    body,
    params: {
      id,
    },
  } = req;

  WorkPeriod.update(id, body)
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
