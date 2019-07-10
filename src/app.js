import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import app from './config/express';
import docs from './config/docs';

import {
  cors,
  errors,
  requestLogger,
} from './middlewares';

import routes from './routes';

if (!process.env.NODE_ENV !== 'production') {
  // REQUEST LOGGER
  app.use(requestLogger);
}

// ALLOW CORS
app.use(cors);

// ROUTES
app.use('/', routes);

// DOCS
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(docs)));

// NOT FOUND ERROR HANDLER
app.use(errors.notFoundHandler);

const host = app.get('host');
const port = app.get('port');
app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`\nServer running at: http://${host}:${port}`);
  console.log(`You can access the api documentation at: http://${host}:${port}/docs\n`);
});

export default app;
