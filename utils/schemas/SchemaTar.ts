import * as yup from 'yup';

const SchemaTar = yup.object({
  id_tarea: yup
    .number()
    .required('Ups! Necesitamos que pongas el Id de la tarea'),

  nombre_tarea: yup
    .string()
    .required('Ups! Necesitamos que pongas el nombre de la tarea'),

  cal_tarea: yup
    .number()
    .required('Ups! Necesitamos que pongas la calificacion de la tarea'),

  id_sub: yup
    .number()
    .required('Ups! Necesitamos que pongas el Id del subtema'),

  id_asis: yup
    .string()
    .required('Ups! Necesitamos que pongas el ID del asistente'),
});
export default SchemaTar;
