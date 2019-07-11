
import HttpStatus from 'http-status-codes';

import genericErrorHandler from '../errors/genericHandler';

import dbMessageErrorHandler from './_dbMessageErrorHandler';

/**
 * INTERNAL_SERVER_ERROR(500) middleware to catch database errors
 */
export default (req, res) => (dbError) => {
  const error = {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    details: dbMessageErrorHandler(dbError),
    message: 'Erro de base de dados. Por favor, contate o administrador do sistema.',
    messageToken: 'general:errors.databaseError',
  };

  genericErrorHandler(error, req, res);
};
