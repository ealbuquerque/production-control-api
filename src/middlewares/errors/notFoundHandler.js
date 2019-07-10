
import HttpStatus from 'http-status-codes';

import genericErrorHandler from './genericHandler';

/**
 * NOT_FOUND(404) middleware
 *
 * @param {object} req
 * @param {object} res
 */
export default (req, res) => {
  const code = HttpStatus.NOT_FOUND;
  const error = {
    code,
    message: 'Registro não encontrado',
    messageToken: 'general.notFound',
  };

  genericErrorHandler(error, req, res);
};
