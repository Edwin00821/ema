import { perseBitToNumber } from 'libs';
import { ICTema } from 'interfaces/Entities';
import { searchParcialByIdOfDB } from 'database/Entities/CParcial';
import { searchUaprendizajeByIdOfDB } from 'database/Entities/CUaprendizaje';
import { databaseSuccess } from 'utils';

export const TemaAdapter = async (
  RowsDataCTema: ICTema[]
): Promise<ICTema[]> => {
  return await databaseSuccess(RowsDataCTema, async () => {
    return await Promise.all(
      RowsDataCTema.map(async (tema) => {
        const [parcial] = await searchParcialByIdOfDB(tema.id_par);
        const [ua] = await searchUaprendizajeByIdOfDB(tema.id_ua);

        return {
          id_tem: tema.id_tem,
          nombre_tem: tema.nombre_tem,
          parcial: parcial,
          ua: ua,
          valida_tem: perseBitToNumber(tema.valida_tem),
        };
      })
    );
  });
};
