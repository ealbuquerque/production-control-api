export default (error) => {
  switch (error.name) {
    case 'SequelizeForeignKeyConstraintError':
      return {
        error,
        message: error.original.detail.indexOf('refencered') !== -1
          ? 'Não foi possível excluir este registro pois o mesmo possuí vínculos com outras tabelas.'
          : 'Não foi possível encontrar o registro da tabela de referência.',
      };
    default:
      return {
        error,
        message: 'Ops, ocorreu um erro... Por favor, tente novamente.',
      };
  }
};
