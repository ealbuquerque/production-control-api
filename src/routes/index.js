import express from 'express';

import controllers from '../controllers';
import {
  schemaValidation,
} from '../middlewares';

import routes from './routes.json';

const router = express.Router();

routes.forEach(({
  action,
  controller: controllerName,
  method,
  path,
}) => {
  const controller = controllers[controllerName][action];

  router.route(path)[method.toLowerCase()](
    schemaValidation,
    controller,
  );
});

export default router;
