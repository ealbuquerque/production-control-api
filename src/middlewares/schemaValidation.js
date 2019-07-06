import HttpStatus from 'http-status-codes';
import Joi from 'joi';

import Schemas from '../schemas';

const supportedMethods = [
  'post',
  'put',
];

const validationOptions = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
};

export default (req, res, next) => {
  const {
    method,
    route: {
      path: reqRoute,
    },
  } = req;

  const schema = Schemas[reqRoute];
  if (!schema) return next();

  const supportThisMethod = supportedMethods.includes(method.toLowerCase());
  if (!supportThisMethod) return next();

  return Joi.validate(req.body, schema, validationOptions, (err, data) => {
    if (!err) {
      req.body = data;
      next();
    } else {
      res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .json({
          error: {
            // fetch only message and type from each error
            details: err.details.map(({ message, type }) => ({
              message: message.replace(/['"]/g, ''),
              type,
            })),
            original: err,
          },
          message: 'Validation Failed',
          messageToken: 'general.validationFailed',
        });
    }
  });
};
