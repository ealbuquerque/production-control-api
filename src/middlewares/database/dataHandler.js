import notFoundErrorHandler from '../errors/notFoundHandler';

/**
 * Database handler returning data
 */
export default (req, res) => (data) => {
  if (data) {
    res.json(data);
  } else {
    notFoundErrorHandler(req, res);
  }
};
