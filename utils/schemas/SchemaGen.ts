import * as yup from 'yup';

const SchemaGen = yup.object({
  id_gen: yup
    .number()
    .typeError('Ups! Necesitamos que pongas el id del genero')
    .required('Ups! Necesitamos que pongas el id del genero'),
  tipo_gen: yup
    .string()
    .required('Ups! Necesitamos que pongas el nombre del genero'),
});
export default SchemaGen;
