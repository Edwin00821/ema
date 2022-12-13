import { perseBitToNumber } from 'libs';
import { ICSubtema } from 'interfaces/Entities';
import { searchTemaByIdOfDB } from 'database/Entities/CTema';
import { databaseSuccess } from 'utils';

export const SubtemaAdapter = async (
  RowsDataCSubtema: ICSubtema[]
): Promise<ICSubtema[]> => {
  return await databaseSuccess(RowsDataCSubtema, async () => {
    return await Promise.all(
      RowsDataCSubtema.map(async (subtema) => {
        const [tema] = await searchTemaByIdOfDB(subtema.id_tem);
        return {
          id_sub: subtema.id_sub,
          nombre_sub: subtema.nombre_sub,
          tema: tema,
          valida_sub: perseBitToNumber(subtema.valida_sub),
        };
      })
    );
  });
};
