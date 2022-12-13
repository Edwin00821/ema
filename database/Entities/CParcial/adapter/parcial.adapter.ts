import { perseBitToNumber } from 'libs';
import { ICParcial } from 'interfaces/Entities';
import { databaseSuccess } from 'utils';

export const ParcialAdapter = (RowsDataCParcial: ICParcial[]): ICParcial[] => {
  return databaseSuccess(RowsDataCParcial, () => {
    return RowsDataCParcial.map((parcial) => {
      return {
        id_par: parcial.id_par,
        nombre_par: parcial.nombre_par,
        valida_par: perseBitToNumber(parcial.valida_par),
      };
    });
  }) as ICParcial[];
};
