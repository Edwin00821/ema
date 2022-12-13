import * as yup from 'yup';

const SchemaInt = yup.object({
  id_int: yup
    .number()
    .required('Ups! Necesitamos que pongas el id de la inteligencia'),
  tipo_int: yup
    .string()
    .required('Ups! Necesitamos que pongas el nombre de la inteligencia'),
});
export default SchemaInt;
