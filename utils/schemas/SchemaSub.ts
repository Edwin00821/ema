import * as yup from 'yup';

const SchemaSub = yup.object({
  id_sub: yup
    .number()
    .required('Ups! Necesitamos que pongas el Id del subtema'),

  nombre_sub: yup
    .string()
    .required('Ups! Necesitamos que pongas el nombre del subtema'),

  id_tem: yup.number().required('Ups! Necesitamos que pongas el Id del tema'),
});
export default SchemaSub;
