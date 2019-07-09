import employee from './employee';
import rawMaterial from './rawMaterial';

export default {
  '/employees': employee,
  '/employees/:id': employee,
  '/raw-materials': rawMaterial,
  '/raw-materials/:id': rawMaterial,
};
