import app from './config/express';

import {
  cors,
  notFoundErrorHandler,
  requestLogger,
} from './middlewares';

if (process.env.NODE_ENV === 'development') {
  // REQUEST LOGGER
  app.use(requestLogger);
}

// ALLOW CORS
app.use(cors);

// NOT FOUND ERROR HANDLER
app.use(notFoundErrorHandler);

const host = app.get('host');
const port = app.get('port');

app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at ${host}:${port}`);
});

export default app;
