import * as yup from 'yup';

const SchemaEst = yup.object({
  boleta_est: yup
    .string()
    .required('Ups! Necesitamos que pongas el numero de empleado'),

  correo_user: yup.string().required('Ups! Necesitamos que pongas el correo'),

  id_es: yup
    .number()
    .required('Ups! Necesitamos que pongas el id de la especialidad'),

  id_sem: yup
    .number()
    .required('Ups! Necesitamos que pongas el id del semestre'),
});
export default SchemaEst;
