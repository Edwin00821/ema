import { perseBitToNumber } from 'libs';
import { IMMaterial } from 'interfaces/Entities';
import { searchSubtemaByIdOfDB } from 'database/Entities/CSubtema';
import { databaseSuccess } from 'utils';

export const MaterialAdapter = async (
  RowsDataMMaterial: IMMaterial[]
): Promise<IMMaterial[]> => {
  return await databaseSuccess(RowsDataMMaterial, async () => {
    return await Promise.all(
      RowsDataMMaterial.map(async (material) => {
        const [subtema] = await searchSubtemaByIdOfDB(
          material.id_sub as number
        );

        return {
          id_mat: material.id_mat,
          url_mat: material.url_mat,
          subtema: subtema,
          valida_mat: perseBitToNumber(material.valida_mat),
        };
      })
    );
  });
};
