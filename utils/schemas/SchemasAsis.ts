import * as yup from 'yup';

const SchemaAsis = yup.object({
  id_asis: yup
    .string()
    .required('Ups! Necesitamos que pongas el ID del asistente'),

  id_cicloesc: yup
    .number()
    .required('Ups! Necesitamos que pongas el id del ciclo escolar'),

  correo_user: yup.string().required('Ups! Necesitamos que pongas el correo'),
});
export default SchemaAsis;
