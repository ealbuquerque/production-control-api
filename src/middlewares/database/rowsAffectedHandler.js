import notFoundErrorHandler from '../errors/notFoundHandler';

/**
 * Database handler rows affected
 */
export default (req, res) => (data) => {
  const rowsAffected = Array.isArray(data)
    ? data[0] // on update
    : data;// on delete
  if (rowsAffected) {
    res.end();
  } else {
    notFoundErrorHandler(req, res);
  }
};
