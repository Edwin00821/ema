import * as yup from 'yup';

const SchemaUser = yup.object({
  correo_user: yup.string().required('Ups! Necesitamos que pongas el correo'),

  password_user: yup
    .string()
    .required('Ups! Necesitamos que pongas una contraseña'),

  id_rol: yup.number().required('Ups! Necesitamos que pongas el id del rol'),

  id_per: yup
    .number()
    .required('Ups! Necesitamos que pongas el id de la persona'),
});
export default SchemaUser;
