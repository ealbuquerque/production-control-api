import RawMaterial from '../models/RawMaterial';

const baseQuery = {
  attributes: [
    'id',
    'name',
    'quantity',
  ],
};

const destroy = id => RawMaterial.destroy({
  where: {
    id,
  },
});

const findAll = () => RawMaterial.findAll(baseQuery);

const findById = id => RawMaterial.findByPk(id, baseQuery);

const create = body => RawMaterial.create(body);

const update = (id, body) => RawMaterial.update(
  body,
  {
    where: {
      id,
    },
  },
);

export default {
  create,
  destroy,
  findAll,
  findById,
  update,
};
