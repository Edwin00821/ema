import { perseBitToNumber } from 'libs';
import { ICEspecialidad } from 'interfaces/Entities';
import { databaseSuccess } from 'utils';
type IEspAdapter = (
  data: ICEspecialidad[]
) => ICEspecialidad[] | Promise<ICEspecialidad[]>;

export const EspecialidadAdapter: IEspAdapter = (RowsDataCEspecialidad) => {
  return databaseSuccess(RowsDataCEspecialidad, () => {
    return RowsDataCEspecialidad.map((especialidad) => {
      return {
        id_es: especialidad.id_es,
        nombre_es: especialidad.nombre_es,
        valida_es: perseBitToNumber(especialidad.valida_es),
      };
    });
  });
};
