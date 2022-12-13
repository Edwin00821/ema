import { perseBitToNumber } from 'libs';
import { IESemEsp } from 'interfaces/Entities';
import { searchSemestreByIdOfDB } from 'database/Entities/CSemestre';
import { searchEspecialidadByIdOfDB } from 'database/Entities/CEspecialidad';
import { databaseSuccess } from 'utils';

export const SemEspAdapter = async (RowsDataESemEsp: IESemEsp[]) => {
  return await databaseSuccess(RowsDataESemEsp, async () => {
    return await Promise.all(
      RowsDataESemEsp.map(async (semesp) => {
        const semestre = await searchSemestreByIdOfDB(semesp.id_sem);
        const especialidad = await searchEspecialidadByIdOfDB(semesp.id_es);
        if (semestre && especialidad) {
          return {
            id_semesp: semesp.id_semesp,
            semestre: semestre[0],
            especialidad: especialidad[0],
            valida_semesp: perseBitToNumber(semesp.valida_semesp),
          };
        }
        return {
          id_semesp: semesp.id_semesp,
          semestre: {} as any,
          especialidad: {} as any,
          valida_semesp: perseBitToNumber(semesp.valida_semesp),
        };
      })
    );
  });
};
