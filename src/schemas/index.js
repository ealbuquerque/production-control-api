import employees from './employees';
import rawMaterial from './rawMaterial';

export default {
  '/employees': employees,
  '/employees/:id': employees,
  '/raw-materials': rawMaterial,
  '/raw-materials/:id': rawMaterial,
};
