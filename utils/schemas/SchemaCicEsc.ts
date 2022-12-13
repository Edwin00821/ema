import * as yup from 'yup';

const SchemaCicEsc = yup.object({
  id_cicloesc: yup
    .number()
    .required('Ups! Necesitamos que pongas el id del ciclo escolar'),
  id_ae: yup
    .number()
    .required('Ups! Necesitamos que pongas el id del año escolar'),
  id_tc: yup
    .number()
    .required('Ups! Necesitamos que pongas el id del año escolar'),
});
export default SchemaCicEsc;
