import Joi from 'joi';

const regexWorkPeriod = /^[1-9]h$/;

export default Joi
  .object()
  .keys({
    value: Joi
      .string()
      .regex(regexWorkPeriod)
      .required(),
  });
