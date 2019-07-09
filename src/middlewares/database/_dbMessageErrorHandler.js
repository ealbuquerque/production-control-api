export default (error) => {
  switch (error.name) {
    case 'SequelizeForeignKeyConstraintError':
      return {
        error,
        message: 'Não foi possível excluir este registro pois o mesmo possuí vínculos com outros registros.',
      };
    default:
      return {
        error,
        message: 'Ops, ocorreu um erro... Por favor, tente novamente.',
      };
  }
};
