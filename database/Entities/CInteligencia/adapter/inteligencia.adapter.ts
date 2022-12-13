import { perseBitToNumber } from 'libs';
import { ICInteligencia } from 'interfaces/Entities';
import { databaseSuccess } from 'utils';

export const InteligenciaAdapter = (
  RowsDataCInteligencia: ICInteligencia[]
): ICInteligencia[] => {
  return databaseSuccess(RowsDataCInteligencia, () => {
    return RowsDataCInteligencia.map((inteligencia) => {
      return {
        id_int: inteligencia.id_int,
        tipo_int: inteligencia.tipo_int,
        valida_int: perseBitToNumber(inteligencia.valida_int),
      };
    });
  }) as ICInteligencia[];
};
