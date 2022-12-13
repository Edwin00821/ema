import { perseBitToNumber } from 'libs';
import { ICGeneroReq, ICGeneroRes } from 'interfaces/Entities';
import { databaseSuccess } from 'utils';

type generoAdap = (
  data: ICGeneroReq[]
) => ICGeneroRes[] | Promise<ICGeneroRes[]>;

export const GeneroAdapter: generoAdap = (RowsDataCGenero) => {
  return databaseSuccess(RowsDataCGenero, () => {
    return RowsDataCGenero.map((genero) => {
      return {
        id_gen: genero.id_gen,
        tipo_gen: genero.tipo_gen,
        valida_gen: perseBitToNumber(genero.valida_gen),
      };
    });
  });
};
