import Joi from 'joi';

export default Joi
  .object()
  .keys({
    name: Joi
      .string()
      .max(100)
      .required(),
    idEmployee: Joi
      .number()
      .integer()
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
