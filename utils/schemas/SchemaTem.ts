import * as yup from 'yup';

const SchemaTem = yup.object({
  id_tem: yup.number().required('Ups! Necesitamos que pongas el Id del tema'),

  nombre_tem: yup
    .string()
    .required('Ups! Necesitamos que pongas el nombre del tema'),

  id_par: yup
    .number()
    .required('Ups! Necesitamos que pongas el id del parcial'),

  id_ua: yup
    .number()
    .required('Ups! Necesitamos que pongas el id de la unidad de aprendizaje'),
});
export default SchemaTem;
