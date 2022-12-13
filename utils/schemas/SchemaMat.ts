import * as yup from 'yup';

const SchemaMat = yup.object({
  id_mat: yup
    .number()
    .required('Ups! Necesitamos que pongas el ID del material'),

  url_mat: yup
    .string()
    .required('Ups! Necesitamos que pongas la URL del material'),

  id_sub: yup
    .number()
    .required('Ups! Necesitamos que pongas el Id del subtema'),
});

export default SchemaMat;
