export default [
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
];
