import Employee from '../models/Employee';
import Product from '../models/Product';
import ProductRawMaterial from '../models/ProductRawMaterial';
import RawMaterial from '../models/RawMaterial';

const baseQuery = {
  attributes: [
    'id',
    'name',
  ],
  include: [
    {
      as: 'employee',
      attributes: [
        'id',
        'name',
      ],
      model: Employee,
    },
    {
      as: 'rawMaterials',
      attributes: [
        'id',
        'name',
      ],
      model: RawMaterial,
      required: true,
      through: {
        attributes: [],
        model: ProductRawMaterial,
      },
    },
  ],
};

const destroy = id => Product.destroy({
  where: {
    id,
  },
});

const findAll = () => Product.findAll(baseQuery);

const findById = id => Product.findByPk(id, baseQuery);

const create = ({
  rawMaterials,
  ...body
}) => Product
  .create(body)
  .then(dbProduct => dbProduct.setRawMaterials(rawMaterials));

const update = (id, {
  rawMaterials,
  ...body
}) => Product
  .update(
    body,
    {
      where: {
        id,
      },
    },
  )
  .then(() => Product.findByPk(id))
  .then((dbProduct) => {
    if (dbProduct === null) {
      return false;
    }

    return dbProduct.setRawMaterials(rawMaterials, {
      through: {
        started: false,
      },
    });
  });

export default {
  create,
  destroy,
  findAll,
  findById,
  update,
};
