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

const destroy = id => Employee.destroy({
  where: {
    id,
  },
});

/**
 * @swagger
 * /employees:
 *   get:
 *     tags:
 *      - pet
 *     operationId: findAll
 *     summary: Lista todos registros
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
 *      - pet
 *     operationId: findByPk
 *     summary: Busca um registro pelo seu respectivo id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O id do registro
 *         required: true
 *     responses:
 *       200:
 *         description: Sucesso
 *       500:
 *         description: Caso dê algum erro no servidor
 */
const findById = id => Employee.findByPk(id, baseQuery);

/**
 * @swagger
 * /employees:
 *   post:
 *     tags:
 *      - pet
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
 *       - pet
 *     operationId: edit
 *     summary: Atualiza um registro
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
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

export default {
  create,
  destroy,
  findAll,
  findById,
  update,
};
