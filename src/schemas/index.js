import employee from './employee';
import product from './product';
import rawMaterial from './rawMaterial';

export default {
  '/employees': employee,
  '/employees/:id': employee,
  '/products': product,
  '/products/:id': product,
  '/raw-materials': rawMaterial,
  '/raw-materials/:id': rawMaterial,
};
