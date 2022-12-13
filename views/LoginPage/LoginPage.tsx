import { FC } from 'react';
import Link from 'next/link';

import { AiOutlineGoogle } from 'react-icons/ai';

import { LoginForm, Authenticators } from './components';

import { signIn } from 'next-auth/react';

const LoginPage: FC = () => {
  const handleLoginGoogle = async () => {
    await signIn('google');
  };

  return (
    <div className='grid max-h-screen  grid-cols-1 dark:bg-tertiary lg:grid-cols-2'>
      <div className='flex h-screen flex-col justify-center rounded-tl-lg rounded-bl-lg   p-4'>
        <div className='flex flex-col items-center justify-center rounded-tl-lg rounded-bl-lg p-4'>
          <div className='flex flex-col items-center gap-8'>
            <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>
              Bienvenido
            </h1>
            <p className='text-center text-gray-500 dark:text-gray-300'>
              Para continuar, inicia sesión en tu cuenta
            </p>
            <div className='flex gap-3'>
              <button onClick={handleLoginGoogle}>
                <Authenticators
                  href='/'
                  icon={<AiOutlineGoogle />}
                  name={'Google'}
                />
              </button>
            </div>
          </div>
          <div className='my-8'>
            <p className='relative text-center text-gray-500 before:absolute before:-left-[60px] before:top-[50%] before:h-[1px] before:w-full before:max-w-[50px] before:bg-current after:absolute after:top-[50%] after:-right-[60px] after:h-[1px] after:w-full after:max-w-[50px] after:bg-current dark:text-gray-300 md:before:-left-[140px] md:before:max-w-[120px] md:after:-right-[140px] md:after:max-w-[120px]'>
              Ingresa con tu email
            </p>
          </div>
          <div className='mb-8 w-full sm:w-2/3'>
            <LoginForm />
          </div>
          <div>
            <span className='text-gray-500 dark:text-gray-400'>
              ¿No tienes cuenta?{' '}
              <Link href='/register'>
                <a className='text-gray-900 hover:underline hover:decoration-secondary hover:decoration-wavy dark:text-gray-300 dark:hover:text-gray-100'>
                  Regístrate
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className='hidden h-full lg:flex lg:items-center lg:justify-center'>
        <img src='/img/login.png' className='h-10/12 w-10/12' />
      </div>
    </div>
  );
};

export default LoginPage;
