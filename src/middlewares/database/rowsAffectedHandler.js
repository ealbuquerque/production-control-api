import notFoundErrorHandler from '../errors/notFoundHandler';

/**
 * Database handler rows affected
 */
export default (req, res) => (data) => {
  const rowsAffected = Array.isArray(data) ? data[0] : data;
  if (rowsAffected) {
    res.end();
  } else {
    notFoundErrorHandler(req, res);
  }
};
