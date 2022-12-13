import * as yup from 'yup';

const SchemaRol = yup.object({
  id_rol: yup.number().required('Ups! Necesitamos que pongas el id del rol'),
  tipo_rol: yup
    .string()
    .required('Ups! Necesitamos que pongas el nombre del rol'),
});
export default SchemaRol;
