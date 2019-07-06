import app from './config/express';

import {
  cors,
  errors,
  requestLogger,
} from './middlewares';

import routes from './routes';

if (process.env.NODE_ENV === 'development') {
  // REQUEST LOGGER
  app.use(requestLogger);
}

// ALLOW CORS
app.use(cors);

// ROUTES
app.use('/', routes);

// NOT FOUND ERROR HANDLER
app.use(errors.notFoundHandler);

const host = app.get('host');
const port = app.get('port');
app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at ${host}:${port}`);
});

export default app;
