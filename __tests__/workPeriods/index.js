const {
  chai,
  HttpStatus,
  SERVER_URL,
} = require('../config');

const {
  expect,
  request,
} = chai;

const ENDPOINT = '/work-periods';

describe('Testing the work periods endpoints:', () => {
  it('It should return all work periodss', (done) => {
    request(SERVER_URL)
      .get(ENDPOINT)
      .end((err, res) => {
        expect(res).to.have.status(HttpStatus.OK);
        expect(err).to.equal(null);

        expect(res.body).be.a('array');

        const [first] = res.body;
        if (first) {
          expect(first).to.have.property('id');
          expect(first).to.have.property('value');
        }

        done();
      });
  });

  it('It should return a work period', (done) => {
    const id = 1;
    request(SERVER_URL)
      .get(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(HttpStatus.OK);
        expect(err).to.equal(null);

        expect(res.body).be.a('object');
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('value');

        done();
      });
  });

  it('It should not get a work period with invalid id', (done) => {
    const id = 999999999;
    chai.request(SERVER_URL)
      .get(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.NOT_FOUND);
        expect(res.body.message).to.equal('Registro não encontrado');
        done();
      });
  });

  it('It should create a work period', (done) => {
    const workPeriod = {
      value: '1h',
    };

    chai.request(SERVER_URL)
      .post(ENDPOINT)
      .send(workPeriod)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.CREATED);
        expect(res.body).to.include({});
        done();
      });
  });

  it('It should not create a work period with incomplete parameters', (done) => {
    const workPeriod = {};

    chai.request(SERVER_URL)
      .post(ENDPOINT)
      .send(workPeriod)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.UNPROCESSABLE_ENTITY);
        done();
      });
  });

  it('It should update a work period', (done) => {
    const id = 1;
    const workPeriod = {
      value: '1h',
    };

    chai.request(SERVER_URL)
      .put(`${ENDPOINT}/${id}`)
      .send(workPeriod)
      .end((err1, res1) => {
        chai.request(SERVER_URL)
          .get(`${ENDPOINT}/${id}`)
          .end((err2, res2) => {
            expect(res1.status).to.equal(HttpStatus.OK);
            expect(res1.body).to.include({});

            expect(res2.status).to.equal(HttpStatus.OK);
            expect(res2.body.id).to.equal(id);
            expect(res2.body.value).to.equal(workPeriod.value);
            done();
          });
      });
  });

  it('It should update a work period with invalid id', (done) => {
    const id = 999999999;
    const workPeriod = {
      value: '1h',
    };

    chai.request(SERVER_URL)
      .put(`${ENDPOINT}/${id}`)
      .send(workPeriod)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.NOT_FOUND);
        done();
      });
  });

  it('It should delete a work period', (done) => {
    const id = 4;
    chai.request(SERVER_URL)
      .delete(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.include({});
        done();
      });
  });

  it('It should delete a work period with invalid id', (done) => {
    const id = 999999999;

    chai.request(SERVER_URL)
      .delete(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.NOT_FOUND);
        done();
      });
  });
});
