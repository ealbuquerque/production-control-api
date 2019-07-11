/**
 * Generic error handler
 *
 * @param {object} error
 * @param {object} req
 * @param {object} res
 */
export default (error, req, res) => {
  // eslint-disable-next-line no-console
  console.error('Generic error handler\n', error);
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
