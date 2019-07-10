import Employee from '../models/Employee';
import Product from '../models/Product';
import ProductRawMaterial from '../models/ProductRawMaterial';
import RawMaterial from '../models/RawMaterial';

const baseQuery = {
  attributes: [
    'id',
    'name',
  ],
  include: [
    {
      as: 'employee',
      attributes: [
        'id',
        'name',
      ],
      model: Employee,
    },
    {
      as: 'rawMaterials',
      attributes: [
        'id',
        'name',
      ],
      model: RawMaterial,
      required: true,
      through: {
        attributes: [],
        model: ProductRawMaterial,
      },
    },
  ],
};

/**
 * @swagger
 * /products:
 *   get:
 *     tags:
 *      - /products
 *     operationId: findAll
 *     summary: Lista todos os registros
 *     responses:
 *       200:
 *         description: Sucesso
 *       500:
 *         description: Caso dê algum erro no servidor
 */
const findAll = () => Product.findAll(baseQuery);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     tags:
 *      - /products
 *     operationId: findById
 *     summary: Busca um registro pelo seu respectivo id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O id do registro
 *         required: true
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Registro não encontrado
 *       500:
 *         description: Caso dê algum erro no servidor
 */
const findById = id => Product.findByPk(id, baseQuery);

/**
 * @swagger
 * /products:
 *   post:
 *     tags:
 *      - /products
 *     operationId: new
 *     summary: Cadastra um novo registro
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             idEmployee:
 *               type: integer
 *             name:
 *               type: string
 *             rawMaterials:
 *               type: array
 *               items:
 *                 type: integer
 *           example:
 *             idEmployee: 2
 *             name: Novo produto
 *             rawMaterials: [1,2]
 *         required:
 *           - idEmployee
 *           - name
 *     responses:
 *       201:
 *         description: Registro adicionado com sucesso
 *       422:
 *         description: Caso exista algum erro na validação do schema
 *       500:
 *         description: Caso dê algum erro no servidor
 */
const create = ({
  rawMaterials,
  ...body
}) => Product
  .create(body)
  .then(dbProduct => dbProduct.setRawMaterials(rawMaterials));

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     tags:
 *       - /products
 *     operationId: edit
 *     summary: Atualiza um registro
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O id do registro
 *         required: true
 *       - in: body
 *         name: body
 *         schema:
 *           type: object
 *           properties:
 *             idEmployee:
 *               type: integer
 *             name:
 *               type: string
 *             rawMaterials:
 *               type: array
 *               items:
 *                 type: integer
 *           example:
 *             idEmployee: 1
 *             name: Produto atualizado
 *             rawMaterials: [1]
 *         required:
 *           - name
 *           - quantity
 *     responses:
 *       200:
 *         description: Registro alterado com sucesso
 *       404:
 *         description: Registro não encontrado
 *       422:
 *         description: Caso exista algum erro na validação do schema
 *       500:
 *         description: Caso dê algum erro no servidor
 */
const update = (id, {
  rawMaterials,
  ...body
}) => Product
  .update(
    body,
    {
      where: {
        id,
      },
    },
  )
  .then(() => Product.findByPk(id))
  .then((dbProduct) => {
    if (dbProduct === null) return false;

    return dbProduct.setRawMaterials(rawMaterials, {
      through: {
        started: false,
      },
    });
  });

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     tags:
 *      - /products
 *     operationId: destroy
 *     summary: Remove um registro pelo seu respectivo id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O id do registro
 *         required: true
 *     responses:
 *       200:
 *         description: Registro removido com sucesso
 *       404:
 *         description: Registro não encontrado
 *       500:
 *         description: Caso dê algum erro no servidor
 */
const destroy = id => Product.destroy({
  where: {
    id,
  },
});

export default {
  create,
  destroy,
  findAll,
  findById,
  update,
};
