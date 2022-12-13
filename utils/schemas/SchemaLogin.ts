import * as yup from 'yup';

const SchemaLogin = yup.object({
  correo_user: yup
    .string()
    .email()
    .required('Ups! Necesitamos tu correo para continuar'),
  password_user: yup
    .string()
    .required('Ups! Necesitamos que pongas una contraseña'),
  captcha: yup.boolean().required('Ups! Necesitamos que pongas el captcha'),
  remember: yup.boolean(),
  check: yup.boolean(),
});
export default SchemaLogin;
