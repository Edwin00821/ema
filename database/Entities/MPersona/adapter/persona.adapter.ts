import { perseBitToNumber } from 'libs';
import { searchGeneroByIdOfDB } from 'database/Entities/CGenero';
import { searchInteligenciaByIdOfDB } from 'database/Entities/CInteligencia';
import { databaseSuccess } from 'utils';
import { IMPersonaReq, IMPersonaRes } from 'interfaces/Entities';

type personaAdapterT = (
  RowsDataIMPersona: IMPersonaReq[]
) => Promise<IMPersonaRes[]>;

export const personaAdapter: personaAdapterT = async (RowsDataIMPersona) => {
  return await databaseSuccess(RowsDataIMPersona, async () => {
    return await Promise.all(
      RowsDataIMPersona.map(async (persona) => {
        const [genero] = await searchGeneroByIdOfDB(persona.id_gen);
        const [inteligencia] = await searchInteligenciaByIdOfDB(persona.id_int);
        return {
          id_per: persona.id_per,
          nombre_per: persona.nombre_per,
          appat_per: persona.appat_per,
          apmat_per: persona.apmat_per,
          fecha_de_nacimiento_per: persona.fecha_de_nacimiento_per,
          genero,
          inteligencia,
          valida_per: perseBitToNumber(persona.valida_per),
        };
      })
    );
  });
};
