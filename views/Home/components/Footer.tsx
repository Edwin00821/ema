import { FC } from 'react';
import Link from 'next/link';

import { HiOutlineMail, HiOutlineMap } from 'react-icons/hi';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

import { Box } from '@mui/material';
import Developers from './Developers';

const Footer: FC = () => {
  return (
    <Box className='w-full bg-primary-dark p-8 dark:bg-tertiary-dark'>
      <Box className='grid grid-rows-1 gap-8 md:grid-cols-12 xl:gap-8'>
        <Box className='flex flex-col gap-4 md:col-span-12 xl:col-span-4'>
          <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>
            EMA
          </h1>
          <p className='text-justify text-gray-600 dark:text-gray-300'>
            Es una asistente que pretende apoyar con la organización y el
            aprendizaje de manera visual para los alumnos de la carrera de
            programación en el CECyT 9.
          </p>
          <Developers />
        </Box>
        <Box className='md:col-span-4 xl:col-span-3'>
          <h2 className='mb-6 font-bold uppercase'>Redes sociales</h2>
          <nav>
            <a
              href='https://www.facebook.com/jtdevsmx'
              className='flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-300 dark:hover:bg-gray-900'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebookF className='h-[20px] w-[20px] bg-sky-600 p-[3px] text-white' />
              EMA
            </a>
            <a
              href='https://www.instagram.com/'
              className='flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-300 dark:hover:bg-gray-900'
              target='_blank'
              rel='noreferrer'
            >
              {/* <FaInstagram className='h-[20px] w-[20px] p-[3px] ' />
               */}
              <img
                src='https://cdn-icons-png.flaticon.com/512/2111/2111463.png'
                className='h-[20px] w-[20px]'
                alt='EMA'
              />
              EMA
            </a>
            <a
              href='https://twitter.com'
              className='flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-300 dark:hover:bg-gray-900'
              target='_blank'
              rel='noreferrer'
            >
              <FaTwitter className='h-[20px] w-[20px] text-sky-500 ' />
              AKDMY_EMA
            </a>
          </nav>
        </Box>
        <Box className='md:col-span-4 xl:col-span-3'>
          <h2 className='mb-6 font-bold uppercase'>Contacto</h2>
          <Box className='flex flex-col gap-4'>
            <p className='flex items-center gap-2'>
              <HiOutlineMap
                className='h-10 w-10'
                stroke='currentColor'
                strokeWidth={2}
              />
              Centro Estudios Científicos y Tecnológicos (CECyT 9) &quot;Juan de Dios
              Bátiz&quot;
            </p>
            <p className='flex items-center gap-2'>
              <HiOutlineMail
                className='h-6 w-6 font-bold'
                stroke='currentColor'
                strokeWidth={2}
              />
              ema_akdmy@gmail.com
            </p>
          </Box>
        </Box>
      </Box>
      <hr className='my-4' />
      <Box className='flex flex-col items-center justify-between gap-4 xl:flex-row'>
        <p className='text-center text-gray-900 dark:text-gray-100 md:text-left'>
          &copy; 2022
          <span className='font-bold text-gray-900 dark:text-gray-100'>
            {' '}
            EMA.
          </span>{' '}
          Todos los derechos reservados.
        </p>
        <Box className='flex flex-col items-center gap-2 md:flex-row'>
          <span className='hidden md:flex'>|</span>
          <Link href='/PrivacyNotice'>
            <a className='text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50'>
              Política de privacidad
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
