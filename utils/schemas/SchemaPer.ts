import * as yup from 'yup';

const SchemaPer = yup.object({
  id_per: yup
    .number()
    .required('Ups! Necesitamos que pongas el id de la persona'),

  nombre_per: yup
    .string()
    .required('Ups! Necesitamos que pongas el nombre de la persona'),

  appat_per: yup
    .string()
    .required('Ups! Necesitamos que pongas el apellido paterno de la persona'),

  apmat_per: yup
    .string()
    .required('Ups! Necesitamos que pongas el apellido materno de la persona'),

  fecha_de_nacimiento_per: yup
    .date()
    .required(
      'Ups! Necesitamos que pongas la fecha de nacimiento de la persona'
    ),

  id_gen: yup.number().required('Ups! Necesitamos que pongas el id del genero'),

  id_int: yup
    .number()
    .required('Ups! Necesitamos que pongas el id de la inteligencia'),
});
export default SchemaPer;
