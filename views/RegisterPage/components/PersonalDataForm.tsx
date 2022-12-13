import { useEffect, useState, FC } from 'react';
import { useSession } from 'next-auth/react';
import { PersonaService } from 'services';

import { useGenero } from 'hooks';
import { useContextRegister } from '../hooks';
import type { IPersonalData } from 'interfaces/Auth';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaRegisterPersonal } from 'utils/schemas';

import { toast, toastConfig } from 'libs';
import { Input, Select } from 'components/Forms';
import Loader from 'components/Loader';

import { FaArrowRight } from 'react-icons/fa';

const customId = 'custom-id-PersonalDataForm';

const PersonalDataForm: FC = () => {
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  const { personalData, dataGenero, setPersonalData, setIndexActive } =
    useContextRegister();

  const { optionsGenero, selectedGenero, setSelectedGenero } =
    useGenero(dataGenero);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<IPersonalData>({
    resolver: yupResolver(SchemaRegisterPersonal),
  });

  const watchName = watch('nombre_per');
  const watchAppat = watch('appat_per');
  const watchApmat = watch('apmat_per');
  const watchBirthday = watch('fecha_de_nacimiento_per');

  useEffect(() => {
    if (session && !personalData) {
      const { name } = session.user;

      setValue('nombre_per', name);
    }
  }, [session]);

  const onSubmit = async (dataForm: IPersonalData) => {
    const { appat_per, apmat_per } = dataForm;

    toast.loading('Validando datos...', {
      toastId: customId,
      autoClose: 2000,
      theme: 'light',
      position: 'top-right',
      ...toastConfig,
    });

    setLoading(true);
    const { data } = await PersonaService.searchByAppatAndApmat(
      appat_per,
      apmat_per
    );

    setLoading(false);

    if (data) {
      toast.update(customId, {
        render: 'Ya existe una persona con esas credenciales',
        type: 'error',
        isLoading: false,
        autoClose: 2000,
        theme: 'light',
        ...toastConfig,
      });
    }
    if (!data) {
      toast.update(customId, {
        render: 'Informacion personal correcta',
        type: 'success',
        isLoading: false,
        autoClose: 800,
        theme: 'light',
        ...toastConfig,
      });
      setTimeout(() => {
        setPersonalData(dataForm);
        setIndexActive(2);
      }, 1000);
    }
  };

  return (
    <form
      className='flex flex-col items-center gap-10 '
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='grid w-5/6 grid-cols-1 items-center justify-items-center gap-x-10 gap-y-5 md:w-4/6 md:grid-cols-2 '>
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
        />
        <Controller
          control={control}
          name='id_gen'
          render={({ field: { onChange } }) => (
            <Select
              name='id_gen'
              placeholder='Escoge un género'
              options={optionsGenero}
              selected={selectedGenero}
              setSelected={setSelectedGenero}
              onChange={onChange}
              errors={errors.id_gen}
            />
          )}
        />
      </div>
      <div className='relative flex'>
        <button
          type='submit'
          disabled={loading}
          className={`mr-3 flex w-full gap-2 ${
            loading ? 'cursor-not-allowed' : 'cursor-pointer'
          } items-center justify-between rounded-lg bg-secondary py-2 px-8 font-bold text-white shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-opacity-50 hover:bg-secondary-dark hover:shadow-secondary-dark`}
        >
          {!loading ? (
            <>
              SIGUIENTE
              <FaArrowRight size={16} className='text-white' />
            </>
          ) : (
            <Loader />
          )}
        </button>
      </div>
    </form>
  );
};

export default PersonalDataForm;
