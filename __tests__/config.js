require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');
const HttpStatus = require('http-status-codes');

chai.use(chaiHttp);

const ENDPOINT = '/raw-materials';
const SERVER_URL = `http://${process.env.APP_HOST}:${process.env.APP_PORT}`;

module.exports = {
  chai,
  ENDPOINT,
  HttpStatus,
  SERVER_URL,
};
