import { perseBitToNumber } from 'libs';
import { ICRol } from 'interfaces/Entities';
import { databaseSuccess } from 'utils';

export const RolAdapter = (RowsDataCRol: ICRol[]): ICRol[] => {
  return databaseSuccess(RowsDataCRol, () => {
    return RowsDataCRol.map((genero) => {
      return {
        id_rol: genero.id_rol,
        tipo_rol: genero.tipo_rol,
        valida_rol: perseBitToNumber(genero.valida_rol),
      };
    });
  }) as ICRol[];
};
