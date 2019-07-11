export default (error) => {
  switch (error.name) {
    case 'SequelizeForeignKeyConstraintError':
      return {
        error,
        message: error.original.detail.indexOf('referenced') !== -1
          ? 'Não foi possível excluir este registro pois o mesmo possuí vínculos com outras tabelas.'
          : 'Não foi possível encontrar o registro da tabela de referência.',
        messageToken: error.original.detail.indexOf('referenced') !== -1
          ? 'general:errors.foreignKeyConstraintError.onDelete'
          : 'general:errors.foreignKeyConstraintError.onCreateOrUpdate',
      };
    case 'SequelizeUniqueConstraintError':
      return {
        error,
        message: 'O valor deve ser único',
        messageToken: 'general:errors.uniqueConstraint',
      };
    default:
      return {
        error,
        message: 'Ops, ocorreu um erro... Por favor, tente novamente.',
        messageToken: 'messageToken:general:errors.defaultError',
      };
  }
};
