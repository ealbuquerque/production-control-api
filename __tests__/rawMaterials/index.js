const {
  chai,
  ENDPOINT,
  HttpStatus,
  SERVER_URL,
} = require('../config');

/* eslint-disable-next-line no-undef */
describe('RawMaterials', () => {
  /* eslint-disable-next-line no-undef */
  it(`GET ${ENDPOINT} 200 - Should return a list`, (done) => {
    chai
      .request(SERVER_URL)
      .get(ENDPOINT)
      .end((err, res) => {
        chai.expect(res).to.have.status(HttpStatus.OK);
        chai.expect(err).to.equal(null);
        chai.expect(res.body).be.a('array');

        done();
      });
  });

  /* eslint-disable-next-line no-undef */
  it(`GET ${ENDPOINT} 200 - Should return a object`, (done) => {
    chai
      .request(SERVER_URL)
      .get(`${ENDPOINT}/1`)
      .end((err, res) => {
        chai.expect(res).to.have.status(HttpStatus.OK);
        chai.expect(err).to.equal(null);
        chai.expect(res.body).be.a('object');

        done();
      });
  });
});
