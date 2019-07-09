import {
  version,
} from '../../package.json';

const host = process.env.APP_HOST || 'localhost';
const port = process.env.APP_PORT || 5000;

export default {
  apis: ['*/router/*.js'],
  definition: {
    info: {
      title: 'ProductionControl',
      version,
    },
    host: `${host}:${port}`,
    basePath: '/',
  },
};
