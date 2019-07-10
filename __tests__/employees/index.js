const {
  chai,
  HttpStatus,
  SERVER_URL,
} = require('../config');

const {
  expect,
  request,
} = chai;

const ENDPOINT = '/employees';

describe('Testing the employees endpoints:', () => {
  it('It should return all employees', (done) => {
    request(SERVER_URL)
      .get(ENDPOINT)
      .end((err, res) => {
        expect(res).to.have.status(HttpStatus.OK);
        expect(err).to.equal(null);

        expect(res.body).be.a('array');

        const [first] = res.body;
        if (first) {
          expect(first).to.have.property('id');
          expect(first).to.have.property('name');
          expect(first).to.have.property('workPeriod');
          expect(first.workPeriod).to.be.an('object');
          expect(first.workPeriod).to.have.property('value');
        }

        done();
      });
  });

  it('It should return a employee', (done) => {
    const id = 1;
    request(SERVER_URL)
      .get(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(HttpStatus.OK);
        expect(err).to.equal(null);

        expect(res.body).be.a('object');
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name');
        expect(res.body).to.have.property('workPeriod');
        expect(res.body.workPeriod).to.be.an('object');
        expect(res.body.workPeriod).to.have.property('id');
        expect(res.body.workPeriod).to.have.property('value');

        done();
      });
  });

  it('It should not get a employee with invalid id', (done) => {
    const id = 999999999;
    chai.request(SERVER_URL)
      .get(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.NOT_FOUND);
        expect(res.body.message).to.equal('Registro não encontrado');
        done();
      });
  });

  it('It should create a employee', (done) => {
    const employee = {
      name: 'Ezequias A. Albuquerque',
      idWorkPeriod: 3,
    };

    chai.request(SERVER_URL)
      .post(ENDPOINT)
      .send(employee)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.CREATED);
        expect(res.body).to.include({});
        done();
      });
  });

  it('It should not create a employee with incomplete parameters', (done) => {
    const employee = {};

    chai.request(SERVER_URL)
      .post(ENDPOINT)
      .send(employee)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.UNPROCESSABLE_ENTITY);
        done();
      });
  });

  it('It should update a employee', (done) => {
    const id = 1;
    const employee = {
      name: 'Ezequias Albuquerque',
      idWorkPeriod: 3,
    };

    chai.request(SERVER_URL)
      .put(`${ENDPOINT}/${id}`)
      .send(employee)
      .end((err1, res1) => {
        chai.request(SERVER_URL)
          .get(`${ENDPOINT}/${id}`)
          .end((err2, res2) => {
            expect(res1.status).to.equal(HttpStatus.OK);
            expect(res1.body).to.include({});

            expect(res2.status).to.equal(HttpStatus.OK);
            expect(res2.body.id).to.equal(id);
            expect(res2.body.name).to.equal(employee.name);
            expect(res2.body.workPeriod).be.a('object');
            expect(res2.body.workPeriod.id).to.equal(employee.idWorkPeriod);
            done();
          });
      });
  });

  it('It should update a employee with invalid id', (done) => {
    const id = 999999999;
    const employee = {
      name: 'Ezequias Albuquerque',
      idWorkPeriod: 3,
    };

    chai.request(SERVER_URL)
      .put(`${ENDPOINT}/${id}`)
      .send(employee)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.NOT_FOUND);
        done();
      });
  });

  it('It should delete a employee', (done) => {
    const id = 3;
    chai.request(SERVER_URL)
      .delete(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.include({});
        done();
      });
  });

  it('It should delete a employee with invalid id', (done) => {
    const id = 999999999;

    chai.request(SERVER_URL)
      .delete(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.NOT_FOUND);
        done();
      });
  });
});
