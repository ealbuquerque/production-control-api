const {
  chai,
  HttpStatus,
  SERVER_URL,
} = require('../config');

const {
  expect,
  request,
} = chai;

const ENDPOINT = '/products';

describe('Testing the products endpoints:', () => {
  it('It should return all products', (done) => {
    request(SERVER_URL)
      .get(ENDPOINT)
      .end((err, res) => {
        expect(res).to.have.status(HttpStatus.OK);
        expect(err).to.equal(null);

        expect(res.body).be.a('array');

        const [first] = res.body;
        if (first) {
          expect(first).to.have.property('id');
          expect(first).to.have.property('employee');
          expect(first).to.have.property('name');
          expect(first).to.have.property('rawMaterials');
        }

        done();
      });
  });

  it('It should return a product', (done) => {
    const id = 1;
    request(SERVER_URL)
      .get(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(HttpStatus.OK);
        expect(err).to.equal(null);

        expect(res.body).be.a('object');
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('employee');
        expect(res.body).to.have.property('name');
        expect(res.body).to.have.property('rawMaterials');

        done();
      });
  });

  it('It should not get a product with invalid id', (done) => {
    const id = 999999999;
    chai.request(SERVER_URL)
      .get(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.NOT_FOUND);
        expect(res.body.message).to.equal('Registro não encontrado');
        done();
      });
  });

  it('It should create a product', (done) => {
    const product = {
      name: 'Novo produto',
      idEmployee: 2,
      rawMaterials: [
        1,
        2,
      ],
    };

    chai.request(SERVER_URL)
      .post(ENDPOINT)
      .send(product)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.CREATED);
        expect(res.body.data).to.include({});
        done();
      });
  });

  it('It should not create a product with incomplete parameters', (done) => {
    const product = {};

    chai.request(SERVER_URL)
      .post(ENDPOINT)
      .send(product)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.UNPROCESSABLE_ENTITY);
        done();
      });
  });

  it('It should update a product', (done) => {
    const id = 1;
    const product = {
      name: 'Produto atualizado',
      idEmployee: 2,
      rawMaterials: [
        1,
      ],
    };

    chai.request(SERVER_URL)
      .put(`${ENDPOINT}/${id}`)
      .send(product)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.OK);
        expect(res.body.data).to.include({});
        done();
      });
  });

  it('It should update a product with invalid id', (done) => {
    const id = 999999999;
    const product = {
      name: 'Produto atualizado',
      idEmployee: 2,
      rawMaterials: [
        1,
      ],
    };

    chai.request(SERVER_URL)
      .put(`${ENDPOINT}/${id}`)
      .send(product)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.NOT_FOUND);
        done();
      });
  });

  it('It should delete a product', (done) => {
    const id = 3;
    chai.request(SERVER_URL)
      .delete(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.include({});
        done();
      });
  });

  it('It should delete a product with invalid id', (done) => {
    const id = 999999999;

    chai.request(SERVER_URL)
      .delete(`${ENDPOINT}/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatus.NOT_FOUND);
        done();
      });
  });
});
