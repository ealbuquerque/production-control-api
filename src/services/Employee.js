import Employee from '../models/Employee';
import WorkPeriod from '../models/WorkPeriod';

const baseQuery = {
  attributes: [
    'id',
    'name',
  ],
  include: [
    {
      as: 'workPeriod',
      attributes: [
        'id',
        'value',
      ],
      model: WorkPeriod,
    },
  ],
};

/**
 * @swagger
 * /employees:
 *   get:
 *     tags:
 *      - /employees
 *     operationId: findAll
 *     summary: Lista todos os registros
 *     responses:
 *       200:
 *         description: Sucesso
 *       500:
 *         description: Caso dê algum erro no servidor
 */
const findAll = () => Employee.findAll(baseQuery);

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     tags:
 *      - /employees
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
const findById = id => Employee.findByPk(id, baseQuery);

/**
 * @swagger
 * /employees:
 *   post:
 *     tags:
 *      - /employees
 *     operationId: new
 *     summary: Cadastra um novo registro
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             idWorkPeriod:
 *               type: integer
 *             name:
 *               type: string
 *           example:
 *             idWorkPeriod: 3
 *             name: Ezequias A. Albuquerque
 *         required:
 *           - idWorkPeriod
 *           - name
 *     responses:
 *       201:
 *         description: Registro adicionado com sucesso
 *       422:
 *         description: Caso exista algum erro na validação do schema
 *       500:
 *         description: Caso dê algum erro no servidor
 */
const create = body => Employee.create(body);

/**
 * @swagger
 * /employees/{id}:
 *   put:
 *     tags:
 *       - /employees
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
 *             idWorkPeriod:
 *               type: integer
 *             name:
 *               type: string
 *           example:
 *             idWorkPeriod: 3
 *             name: Ezequias Albuquerque
 *         required:
 *           - idWorkPeriod
 *           - name
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
const update = (id, body) => Employee.update(
  body,
  {
    where: {
      id,
    },
  },
);

/**
 * @swagger
 * /employees/{id}:
 *   delete:
 *     tags:
 *      - /employees
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
const destroy = id => Employee.destroy({
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
