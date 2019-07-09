export default [
  // EMPLOYEES
  {
    action: 'create',
    controller: 'employees',
    method: 'post',
    path: '/employees',
  },
  {
    action: 'destroy',
    controller: 'employees',
    method: 'delete',
    path: '/employees/:id',
  },
  {
    action: 'findAll',
    controller: 'employees',
    method: 'get',
    path: '/employees',
  },
  {
    action: 'findById',
    controller: 'employees',
    method: 'get',
    path: '/employees/:id',
  },
  {
    action: 'update',
    controller: 'employees',
    method: 'put',
    path: '/employees/:id',
  },
  // PRODUCTS
  {
    action: 'create',
    controller: 'products',
    method: 'post',
    path: '/products',
  },
  {
    action: 'destroy',
    controller: 'products',
    method: 'delete',
    path: '/products/:id',
  },
  {
    action: 'findAll',
    controller: 'products',
    method: 'get',
    path: '/products',
  },
  {
    action: 'findById',
    controller: 'products',
    method: 'get',
    path: '/products/:id',
  },
  {
    action: 'update',
    controller: 'products',
    method: 'put',
    path: '/products/:id',
  },
  // RAW MATERIALS
  {
    action: 'create',
    controller: 'rawMaterials',
    method: 'post',
    path: '/raw-materials',
  },
  {
    action: 'destroy',
    controller: 'rawMaterials',
    method: 'delete',
    path: '/raw-materials/:id',
  },
  {
    action: 'findAll',
    controller: 'rawMaterials',
    method: 'get',
    path: '/raw-materials',
  },
  {
    action: 'findById',
    controller: 'rawMaterials',
    method: 'get',
    path: '/raw-materials/:id',
  },
  {
    action: 'update',
    controller: 'rawMaterials',
    method: 'put',
    path: '/raw-materials/:id',
  },
  // WORK PERIODS
  {
    action: 'create',
    controller: 'workPeriods',
    method: 'post',
    path: '/work-periods',
  },
  {
    action: 'destroy',
    controller: 'workPeriods',
    method: 'delete',
    path: '/work-periods/:id',
  },
  {
    action: 'findAll',
    controller: 'workPeriods',
    method: 'get',
    path: '/work-periods',
  },
  {
    action: 'findById',
    controller: 'workPeriods',
    method: 'get',
    path: '/work-periods/:id',
  },
  {
    action: 'update',
    controller: 'workPeriods',
    method: 'put',
    path: '/work-periods/:id',
  },
];
