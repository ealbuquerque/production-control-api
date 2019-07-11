import Joi from 'joi';

export default Joi
  .object()
  .keys({
    value: Joi
      .string()
      .required(),
  });
