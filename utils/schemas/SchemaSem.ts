import * as yup from 'yup';

const SchemaSem = yup.object({
  id_sem: yup
    .number()
    .required('Ups! Necesitamos que pongas el id del semestre'),
  tipo_sem: yup
    .string()
    .required('Ups! Necesitamos que pongas el nombre del semestre'),
});
export default SchemaSem;
