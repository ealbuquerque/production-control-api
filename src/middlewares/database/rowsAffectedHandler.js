import notFoundErrorHandler from '../errors/notFoundHandler';

/**
 * Database handler rows affected
 */
export default (req, res) => (rowsAffected) => {
  if (rowsAffected) {
    res.end();
  } else {
    notFoundErrorHandler(req, res);
  }
};
