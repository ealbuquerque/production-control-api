import HttpStatus from 'http-status-codes';

/**
 * Database handler returning created data
 */
export default (req, res) => () => res
  .status(HttpStatus.CREATED)
  .end();
