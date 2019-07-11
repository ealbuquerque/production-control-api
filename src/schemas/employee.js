import Joi from 'joi';

export default Joi
  .object()
  .keys({
    idWorkPeriod: Joi
      .number()
      .integer()
      .required(),
    name: Joi
      .string()
      .max(100)
      .required(),
  });
