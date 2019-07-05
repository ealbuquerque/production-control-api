import {
  json,
  urlencoded,
} from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';

const app = express();

dotenv.config();

app.set('host', process.env.APP_HOST || 'localhost');
app.set('port', process.env.APP_PORT || 5000);

app.use(urlencoded({
  extended: true,
}));
app.use(json());

export default app;
