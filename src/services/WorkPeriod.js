import WorkPeriod from '../models/WorkPeriod';

const baseQuery = {
  attributes: [
    'id',
    'value',
  ],
};

/**
 * @swagger
 * /work-periods:
 *   get:
 *     tags:
 *      - /work-periods
 *     operationId: findAll
 *     summary: Lista todos os registros
 *     responses:
 *       200:
 *         description: Sucesso
 *       500:
 *         description: Caso dê algum erro no servidor
 */
const findAll = () => WorkPeriod.findAll(baseQuery);

/**
 * @swagger
 * /work-periods/{id}:
 *   get:
 *     tags:
 *      - /work-periods
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
const findById = id => WorkPeriod.findByPk(id, baseQuery);

/**
 * @swagger
 * /work-periods:
 *   post:
 *     tags:
 *      - /work-periods
 *     operationId: new
 *     summary: Cadastra um novo registro
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             value:
 *               type: string
 *           example:
 *             value: 1h
 *         required:
 *           - value
 *     responses:
 *       201:
 *         description: Registro adicionado com sucesso
 *       422:
 *         description: Caso exista algum erro na validação do schema
 *       500:
 *         description: Caso dê algum erro no servidor
 */
const create = body => WorkPeriod.create(body);

/**
 * @swagger
 * /work-periods/{id}:
 *   put:
 *     tags:
 *       - /work-periods
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
 *             value:
 *               type: string
 *           example:
 *             value: 1h
 *         required:
 *           - value
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
const update = (id, body) => WorkPeriod.update(
  body,
  {
    where: {
      id,
    },
  },
);

/**
 * @swagger
 * /work-periods/{id}:
 *   delete:
 *     tags:
 *      - /work-periods
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
const destroy = id => WorkPeriod.destroy({
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
