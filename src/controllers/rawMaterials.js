import RawMaterial from '../services/RawMaterial';

import {
  database,
} from '../middlewares';

/**
 * Create new RawMaterial
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {RawMaterial}
 */
const create = (req, res) => {
  const { body } = req;

  RawMaterial.create(body)
    .then(database.createdHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 *  Destroy RawMaterial by id
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

  RawMaterial.destroy(id)
    .then(database.rowsAffectedHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 * Find all the RawMaterials
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {List<RawMaterial>}
 */
const findAll = (req, res) => {
  RawMaterial.findAll()
    .then(database.dataHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 *  Find RawMaterial by id
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {RawMaterial}
 */
const findById = (req, res) => {
  const {
    currentUser,
    params: { id },
  } = req;

  RawMaterial.findById(id, currentUser)
    .then(database.dataHandler(req, res))
    .catch(database.errorHandler(req, res));
};

/**
 *  Update RawMaterial by id
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {RawMaterial}
 */
const update = (req, res) => {
  const {
    body,
    params: {
      id,
    },
  } = req;

  RawMaterial.update(id, body)
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
