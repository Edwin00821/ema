import Link from 'next/link';
import { useContext, useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';

import { FaUserAlt, FaUserTie, FaArrowRight } from 'react-icons/fa';
import { BsCheckLg } from 'react-icons/bs';

import { AcademicDataForm, LoadBar, PersonalDataForm } from './components';

import { AuthService } from 'services/ema/V1/auth';
import { RegisterContext } from './context';
import { toast, toastConfig } from 'libs';
import { signOut } from 'next-auth/react';

const customId = 'custom-id-RegisterPage';

const RegisterPage: FC = () => {
  const { indexActive, personalData, academicData, setIndexActive } =
    useContext(RegisterContext);
  const router = useRouter();
  const [counter, setCounter] = useState(3);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (personalData && academicData) {
      toast.loading('Validando datos...', {
        toastId: customId,
        autoClose: 2000,
        theme: 'light',
        position: 'top-right',
        ...toastConfig,
      });

      AuthService.registerStudent({
        ...personalData,
        ...academicData,
      }).then(({ message }) => {
        if (message) {
          console.log('Ocurrió un error');

          toast.update(customId, {
            render: 'Ocurrió un error 😓',
            type: 'error',
            isLoading: false,
            autoClose: 2000,
            theme: 'light',
            ...toastConfig,
          });
        }
        if (!message) {
          console.log('Usuario registrado');

          toast.update(customId, {
            render: 'Usuario registrado 😊',
            type: 'success',
            isLoading: false,
            autoClose: 2000,
            theme: 'light',
            ...toastConfig,
          });
          setIndexActive(3);
          setIsComplete(true);
        }
      });
    }
  }, [personalData, academicData]);

  useEffect(() => {
    if (isComplete) {
      const interval = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);

      if (counter === 2) {
        signOut();
        clearInterval(interval);
        router.push('/login');
      }
    }
  }, [isComplete, counter]);

  return (
    <div className='flex items-center justify-center bg-primary-light pt-36 dark:bg-tertiary md:h-screen'>
      <div className='flex h-full flex-col items-center justify-evenly'>
        <div className='hidden w-full items-center justify-center gap-3 md:flex'>
          <LoadBar
            title='Información Personal'
            description='Sólo son algunos datos personales'
            active={indexActive === 1}
            complete={!!personalData}
            icon={<FaUserAlt size={40} />}
          />
          <FaArrowRight size={40} />
          <LoadBar
            title='Información Académica'
            description='Necesitamos esto para poder ayudarte'
            active={indexActive === 2}
            complete={!!academicData}
            icon={<FaUserTie size={40} />}
          />
          <FaArrowRight size={40} />
          <LoadBar
            title='Completado'
            description='¡Felicidades, te has registrado!'
            active={indexActive === 3}
            icon={<BsCheckLg size={40} />}
          />
        </div>
        <div className='my-8 w-1/2 md:w-3/12 '>
          <p className='relative text-center text-gray-500 before:absolute before:-left-[60px] before:top-[50%] before:h-[1px] before:w-full before:max-w-[50px] before:bg-current after:absolute after:top-[50%] after:-right-[60px] after:h-[1px] after:w-full after:max-w-[50px] after:bg-current dark:text-gray-200 md:before:-left-[140px] md:before:max-w-[120px] md:after:-right-[140px] md:after:max-w-[120px]'>
            Para continuar, necesitamos los siguientes datos
          </p>
        </div>
        <div className={`mb-8 w-full ${indexActive !== 1 && 'hidden'}`}>
          <PersonalDataForm />
        </div>
        <div className={`mb-8 w-full ${indexActive !== 2 && 'hidden'}`}>
          <AcademicDataForm />
        </div>
        <div className={`mb-8 w-full ${indexActive !== 3 && 'hidden'}`}>
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='flex items-center gap-2'>
              <p className='text-2xl font-bold'>Completado</p>
              <p className='text-2xl font-bold'>
                Te redireccionaremos al login en {counter}
              </p>
            </div>
            <p className='text-center text-gray-500'>
              Te has registrado correctamente, ahora puedes iniciar sesión
            </p>
          </div>
        </div>
        <span className='text-gray-500 dark:text-gray-300 '>
          ¿Ya tienes cuenta?{' '}
          <Link href='/login'>
            <a className='text-gray-900 hover:underline  hover:decoration-secondary hover:decoration-wavy dark:text-gray-100 '>
              Inicia Sesión
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};
export default RegisterPage;
