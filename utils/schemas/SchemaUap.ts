import * as yup from 'yup';

const SchemaUap = yup.object({
  id_ua: yup
    .number()
    .required('Ups! Necesitamos que pongas el id de la unidad de aprendizaje'),
  nombre_ua: yup
    .string()
    .required(
      'Ups! Necesitamos que pongas el nombre de la unidad de aprendizaje'
    ),
  id_semesp: yup
    .number()
    .required('Ups! Necesitamos que pongas el id de la especialidad'),
});
export default SchemaUap;
