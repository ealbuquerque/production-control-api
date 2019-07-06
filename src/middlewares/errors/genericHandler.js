/**
 * Generic error handler
 *
 * @param {object} error
 * @param {object} req
 * @param {object} res
 */
export default (error, req, res) => {
  const {
    code,
    ...rest
  } = error;

  res
    .status(code)
    .json({
      ...rest,
    });
};
