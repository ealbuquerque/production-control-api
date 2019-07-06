// eslint-disable-next-line import/named
import { RawMaterial } from '../models';

const attributes = [
  'id',
  'name',
  'quantity',
];

const destroy = id => RawMaterial.destroy({
  where: {
    id,
  },
});

const findAll = () => RawMaterial.findAll({
  attributes,
});

const findById = id => RawMaterial.findByPk(id, {
  attributes,
});

const create = body => RawMaterial.create(body);

const update = (id, rawMaterial) => RawMaterial.update(
  rawMaterial,
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
