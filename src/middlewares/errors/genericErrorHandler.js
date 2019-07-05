import HttpStatus from 'http-status-codes';


/**
 * Generic error handler
 *
 * @param {object} error
 * @param {object} req
 * @param {object} res
 */
export default (error, req, res) => {
  const {
    details,
  } = error;

  const code = error.code || HttpStatus.INTERNAL_SERVER_ERROR;
  const message = error.message || HttpStatus.getStatusText(code);
  const status = error.status || code;

  res
    .status(status)
    .json(new Error(
      code,
      details,
      message,
    ));
};
