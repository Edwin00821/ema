import React, { FC, useContext, useState, useEffect } from 'react';

import { useAuth, useGenero } from 'hooks';

import { ICGenero } from 'interfaces/Entities';
import type { selectData } from 'typings';

import { PersonaService } from 'services';

import { IProfile } from 'interfaces/Auth';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaEditStudentProfile } from 'utils/schemas';

import { Box } from '@mui/material';
import { toast, toastConfig } from 'libs';
import { Input, Select } from 'components/Forms';
import Loader from 'components/Loader';

interface Props {
  dataGenero: ICGenero[];
}

const customId = 'custom-id-EditProfile';
const EditProfile: FC<Props> = ({ dataGenero }) => {
  const [loading, setLoading] = useState(false);

  const { optionsGenero, setSelectedGenero } = useGenero(dataGenero);

  const { studentState } = useAuth();

  const { id_gen, tipo_gen } = studentState.user.persona.genero;
  const { id_sem, tipo_sem } = studentState.semestre;
  const { id_es, nombre_es } = studentState.especialidad;
  const { id_per, nombre_per, appat_per, apmat_per, fecha_de_nacimiento_per } =
    studentState.user.persona;
  const { boleta_est } = studentState;

  const [selectedGenero] = useState<selectData>({
    value: id_gen,
    name: tipo_gen,
  });

  const [selectedSemestre, setSelectedSemestre] = useState<selectData>({
    name: tipo_sem,
    value: id_sem,
  });

  const [selectedEspecialidad, setSelectedEspecialidad] = useState<selectData>({
    name: nombre_es,
    value: id_es,
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IProfile>({
    resolver: yupResolver(SchemaEditStudentProfile),
  });

  useEffect(() => {
    console.log({ errors });
  }, [errors]);

  const watchName = watch('nombre_per');
  const watchAppat = watch('appat_per');
  const watchApmat = watch('apmat_per');
  const watchBirthday = watch('fecha_de_nacimiento_per');
  const watchEmail = watch('correo_user');
  const watchBoleta = watch('boleta_est');
  const watchId_per = watch('id_per');

  const submit = async (dataForm: IProfile) => {
    toast.loading('Validando datos...', {
      toastId: customId,
      position: 'top-right',
      autoClose: 2000,
      ...toastConfig,
    });
    const { data, message } = await PersonaService.update({
      id_per,
      nombre_per: dataForm.nombre_per,
      appat_per: dataForm.appat_per,
      apmat_per: dataForm.apmat_per,
      fecha_de_nacimiento_per: watchBirthday,
      id_gen,
      id_int: 1,
      valida_per: 1,
    });

    if (data) {
      toast.update(customId, {
        render: 'Perfil actualizado correctamente',
        type: 'success',
        isLoading: false,
        autoClose: 4000,
        ...toastConfig,
      });
    }

    if (message) {
      toast.update(customId, {
        render: 'Error al actualizar perfil',
        type: 'error',
        isLoading: false,
        autoClose: 4000,
        ...toastConfig,
      });
    }
  };

  useEffect(() => {
    const { nombre_per, appat_per, apmat_per, fecha_de_nacimiento_per } =
      studentState.user.persona;

    const { correo_user } = studentState.user;

    const fecha = new Date(fecha_de_nacimiento_per);

    const day = fecha.getDate();
    const month = fecha.getMonth() + 1;
    const year = fecha.getFullYear();

    if (month < 10 && day < 10) {
      setValue('fecha_de_nacimiento_per', `${year}-0${month}-0${day}`);
    } else if (month < 10) {
      setValue('fecha_de_nacimiento_per', `${year}-0${month}-${day}`);
    } else if (day < 10) {
      setValue('fecha_de_nacimiento_per', `${year}-${month}-0${day}`);
    } else {
      setValue('fecha_de_nacimiento_per', `${year}-${month}-${day}`);
    }

    setValue('nombre_per', nombre_per);
    setValue('appat_per', appat_per);
    setValue('apmat_per', apmat_per);
    setValue('correo_user', correo_user);
    setValue('id_gen', id_gen);
    setValue('id_sem', id_sem);
    setValue('id_es', id_es);
    setValue('id_per', id_per);
    setValue('boleta_est', boleta_est);
  }, []);

  return (
    <Box className='flex h-[90vh] flex-col items-center  justify-center dark:bg-tertiary md:px-8'>
      <Box className='flex items-center justify-center'>
        <Box className='flex items-center justify-center p-8 md:col-span-5 xl:p-16'>
          <Box className='flex flex-col items-center gap-5'>
            <img
              className='h-50 w-50 rounded-full'
              src='/img/user.png'
              alt='user photo'
            />
          </Box>
        </Box>
      </Box>
      <Box className='items-center lg:flex'>
        <form
          className='flex flex-col items-center'
          onSubmit={handleSubmit(submit)}
        >
          <Box className='grid w-[50rem] gap-10 lg:grid-cols-2'>
            <Input
              type='text'
              value={watchName}
              placeholder='Nombre(s)'
              register={{ ...register('nombre_per') }}
              errors={errors.nombre_per}
            />
            <Input
              value={watchAppat}
              type='text'
              placeholder='Apellido Paterno'
              register={{ ...register('appat_per') }}
              errors={errors.appat_per}
            />

            <Input
              value={watchApmat}
              type='text'
              placeholder='Apellido Materno'
              register={{ ...register('apmat_per') }}
              errors={errors.apmat_per}
            />
            <Input
              type='date'
              value={watchBirthday}
              placeholder='Fecha de Nacimiento'
              register={{ ...register('fecha_de_nacimiento_per') }}
              errors={errors.fecha_de_nacimiento_per}
              disabled
            />

            <Input
              type='text'
              value={watchEmail}
              placeholder='Correo'
              register={{ ...register('correo_user') }}
              errors={errors.correo_user}
              disabled
            />

            <div className='relative z-30'>
              <Controller
                control={control}
                name='id_gen'
                render={({ field: { onChange } }) => (
                  <Select
                    name='id_gen'
                    placeholder='Género'
                    options={optionsGenero}
                    selected={selectedGenero}
                    setSelected={setSelectedGenero}
                    onChange={onChange}
                    errors={errors.id_gen}
                  />
                )}
              />
            </div>

            <Controller
              control={control}
              name='id_sem'
              render={({ field: { onChange } }) => (
                <Select
                  name='id_sem'
                  placeholder='Semestre'
                  options={[]}
                  selected={selectedSemestre}
                  setSelected={setSelectedSemestre}
                  onChange={onChange}
                  errors={errors.id_sem}
                />
              )}
            />

            <div className='relative'>
              <Controller
                control={control}
                name='id_es'
                render={({ field: { onChange } }) => (
                  <Select
                    name='id_es'
                    placeholder='Especialidad'
                    options={[]}
                    selected={selectedEspecialidad}
                    setSelected={setSelectedEspecialidad}
                    onChange={onChange}
                    errors={errors.id_es}
                  />
                )}
              />
            </div>
          </Box>
          <button
            type='submit'
            disabled={loading}
            className={`mr-3 mb-20 flex w-1/5 gap-2 ${
              loading ? 'cursor-not-allowed' : 'cursor-pointer'
            } items-center justify-between rounded-lg bg-secondary py-2 px-8 text-center font-bold text-white shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-opacity-50 hover:bg-secondary-dark hover:shadow-secondary-dark`}
          >
            {!loading ? <>SIGUIENTE</> : <Loader />}
          </button>
        </form>
      </Box>
    </Box>
  );
};

export default EditProfile;
