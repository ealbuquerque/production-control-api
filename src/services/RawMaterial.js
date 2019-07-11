import RawMaterial from '../models/RawMaterial';

const baseQuery = {
  attributes: [
    'id',
    'name',
    'quantity',
  ],
};

/**
 * @swagger
 * /raw-materials:
 *   get:
 *     tags:
 *      - /raw-materials
 *     operationId: findAll
 *     summary: Lista todos os registros
 *     responses:
 *       200:
 *         description: Sucesso
 *       500:
 *         description: Caso dê algum erro no servidor
 */
const findAll = () => RawMaterial.findAll(baseQuery);

/**
 * @swagger
 * /raw-materials/{id}:
 *   get:
 *     tags:
 *      - /raw-materials
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
const findById = id => RawMaterial.findByPk(id, baseQuery);

/**
 * @swagger
 * /raw-materials:
 *   post:
 *     tags:
 *      - /raw-materials
 *     operationId: new
 *     summary: Cadastra um novo registro
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             quantity:
 *               type: integer
 *           example:
 *             name: Novo produto
 *             quantity: 3
 *         required:
 *           - name
 *           - quantity
 *     responses:
 *       201:
 *         description: Registro adicionado com sucesso
 *       422:
 *         description: Caso exista algum erro na validação do schema
 *       500:
 *         description: Caso dê algum erro no servidor
 */
const create = body => RawMaterial.create(body);

/**
 * @swagger
 * /raw-materials/{id}:
 *   put:
 *     tags:
 *       - /raw-materials
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
 *             name:
 *               type: string
 *             quantity:
 *               type: integer
 *           example:
 *             name: Produto alterado
 *             quantity: 3
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
const update = (id, body) => RawMaterial.update(
  body,
  {
    where: {
      id,
    },
  },
);

/**
 * @swagger
 * /raw-materials/{id}:
 *   delete:
 *     tags:
 *      - /raw-materials
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
const destroy = id => RawMaterial.destroy({
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
