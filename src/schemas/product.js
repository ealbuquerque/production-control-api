import Joi from 'joi';

export default Joi
  .object()
  .keys({
    idEmployee: Joi
      .number()
      .integer()
      .required(),
    name: Joi
      .string()
      .max(100)
      .required(),
    rawMaterials: Joi
      .array()
      .items(
        Joi
          .number()
          .integer()
          .required(),
      )
      .required(),
  });
