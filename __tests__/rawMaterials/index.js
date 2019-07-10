const {
  chai,
  HttpStatus,
  SERVER_URL,
} = require('../config');

const {
  expect,
  request,
} = chai;

const ENDPOINT = '/raw-materials';

describe('Testing the /raw-material endpoints:', () => {
  it('It should return all raw materials', (done) => {
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
          expect(first).to.have.property('quantity');
        }

        done();
      });
  });

  it('It should return a raw material', (done) => {
    const id = 1;
    request(SERVER_URL)
      .get(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(HttpStatus.OK);
        expect(err).to.equal(null);

        expect(res.body).be.a('object');
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name');
        expect(res.body).to.have.property('quantity');

        done();
      });
  });

  it('It should not get a raw material with invalid id', (done) => {
    const id = 999999999;
    chai.request(SERVER_URL)
      .get(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.NOT_FOUND);
        expect(res.body.message).to.equal('Registro não encontrado');
        done();
      });
  });

  it('It should create a raw material', (done) => {
    const rawMaterial = {
      name: 'Nova matéria-prima',
      quantity: 10,
    };

    chai.request(SERVER_URL)
      .post(ENDPOINT)
      .send(rawMaterial)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.CREATED);
        expect(res.body).to.include({});
        done();
      });
  });

  it('It should not create a raw material with incomplete parameters', (done) => {
    const rawMaterial = {
      quantity: 1,
    };

    chai.request(SERVER_URL)
      .post(ENDPOINT)
      .send(rawMaterial)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.UNPROCESSABLE_ENTITY);
        done();
      });
  });

  it('It should update a raw material', (done) => {
    const id = 1;
    const rawMaterial = {
      name: 'Matéria-prima alterada',
      quantity: 10,
    };

    chai.request(SERVER_URL)
      .put(`${ENDPOINT}/${id}`)
      .send(rawMaterial)
      .end((err1, res1) => {
        chai.request(SERVER_URL)
          .get(`${ENDPOINT}/${id}`)
          .end((err2, res2) => {
            expect(res1.status).to.equal(HttpStatus.OK);
            expect(res1.body).to.include({});

            expect(res2.status).to.equal(HttpStatus.OK);
            expect(res2.body.id).to.equal(id);
            expect(res2.body.name).to.equal(rawMaterial.name);
            expect(res2.body.quantity).to.equal(rawMaterial.quantity);
            done();
          });
      });
  });

  it('It should update a raw material with invalid id', (done) => {
    const id = 999999999;
    const rawMaterial = {
      name: 'Matéria-prima alterada',
      quantity: 10,
    };

    chai.request(SERVER_URL)
      .put(`${ENDPOINT}/${id}`)
      .send(rawMaterial)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.NOT_FOUND);
        done();
      });
  });

  it('It should delete a raw material', (done) => {
    const id = 3;
    chai.request(SERVER_URL)
      .delete(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.include({});
        done();
      });
  });

  it('It should delete a raw material with invalid id', (done) => {
    const id = 999999999;

    chai.request(SERVER_URL)
      .delete(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.NOT_FOUND);
        done();
      });
  });
});
