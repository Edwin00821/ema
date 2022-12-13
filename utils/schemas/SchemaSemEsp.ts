import * as yup from 'yup';

const SchemaEsp = yup.object({
  id_semesp: yup
    .number()
    .required('Ups! Necesitamos que pongas el id de la especialidad'),
  id_sem: yup
    .number()
    .required('Ups! Necesitamos que pongas el id del semestre'),
  id_es: yup
    .number()
    .required('Ups! Necesitamos que pongas el id de la especialidad'),
});
export default SchemaEsp;
