import WorkPeriod from '../models/WorkPeriod';

const baseQuery = {
  attributes: [
    'id',
    'value',
  ],
};

const destroy = id => WorkPeriod.destroy({
  where: {
    id,
  },
});

const findAll = () => WorkPeriod.findAll(baseQuery);

const findById = id => WorkPeriod.findByPk(id, baseQuery);

const create = body => WorkPeriod.create(body);

const update = (id, body) => WorkPeriod.update(
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
