import * as yup from 'yup';

const SchemaPar = yup.object({
  id_par: yup
    .number()
    .required('Ups! Necesitamos que pongas el id del parcial'),
  nombre_par: yup
    .string()
    .required('Ups! Necesitamos que pongas el nombre del parcial'),
});
export default SchemaPar;
