
import HttpStatus from 'http-status-codes';

import genericErrorHandler from '../errors/genericHandler';

/**
 * INTERNAL_SERVER_ERROR(500) middleware to catch database errors
 */
export default (req, res) => (dbError) => {
  const error = {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    details: dbError,
    message: 'Database error',
    messageToken: 'general.databaseError',
  };

  genericErrorHandler(error, req, res);
};
