import Joi from 'joi';

export default Joi
  .object()
  .keys({
    name: Joi
      .string()
      .max(100)
      .required(),
    quantity: Joi
      .number()
      .integer(),
  });
