import { perseBitToNumber } from 'libs';
import { ICSemestre } from 'interfaces/Entities';
import { databaseSuccess } from 'utils';

export const SemestreAdapter = (
	RowsDataCSemestre: ICSemestre[]
): ICSemestre[] => {
	return databaseSuccess(RowsDataCSemestre, () => {
		return RowsDataCSemestre.map((semestre) => {
			return {
				id_sem: semestre.id_sem,
				tipo_sem: semestre.tipo_sem,
				valida_sem: perseBitToNumber(semestre.valida_sem),
			};
		});
	}) as ICSemestre[];
};
