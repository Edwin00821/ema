import * as yup from 'yup';

const SchemaEsp = yup.object({
  id_es: yup
    .number()
    .required('Ups! Necesitamos que pongas el id de la especialidad'),
  nombre_es: yup
    .string()
    .required('Ups! Necesitamos que pongas el nombre de la especialidad'),
});
export default SchemaEsp;
