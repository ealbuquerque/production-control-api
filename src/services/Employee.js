import Employee from '../models/Employee';
import WorkPeriod from '../models/WorkPeriod';

const baseQuery = {
  attributes: [
    'id',
    'name',
  ],
  include: [
    {
      as: 'workPeriod',
      attributes: [
        'id',
        'value',
      ],
      model: WorkPeriod,
    },
  ],
};

const destroy = id => Employee.destroy({
  where: {
    id,
  },
});

const findAll = () => Employee.findAll(baseQuery);

const findById = id => Employee.findByPk(id, baseQuery);

const create = body => Employee.create(body);

const update = (id, body) => Employee.update(
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
