import * as yup from 'yup';

const SchemaAdm = yup.object({
  num_empleado: yup
    .number()
    .required('Ups! Necesitamos que pongas el numero de empleado'),

  correo_user: yup.string().required('Ups! Necesitamos que pongas el correo'),
});
export default SchemaAdm;
