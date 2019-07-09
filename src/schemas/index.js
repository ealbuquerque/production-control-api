import employees from './employees';
import rawMaterial from './rawMaterial';
import workPeriod from './workPeriod';

export default {
  '/employees': employees,
  '/employees/:id': employees,
  '/raw-materials': rawMaterial,
  '/raw-materials/:id': rawMaterial,
  '/work-period': workPeriod,
  '/work-period/:id': workPeriod,
};
