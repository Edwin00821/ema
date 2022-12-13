import { FC, useEffect, useRef } from 'react';
import { useNearScreen } from 'hooks';
import { useHomeContext } from '../hooks';
import { Box } from '@mui/material';

const Mision: FC = () => {
  const refMission = useRef(null);
  const { setIsMissionNearScreen } = useHomeContext();

  const { isNearScreen } = useNearScreen({
    externalRef: refMission,
    once: false,
  });

  useEffect(() => {
    setIsMissionNearScreen(isNearScreen);
  }, [isNearScreen]);

  return (
    <section
      id='mision'
      className='m-auto max-h-screen max-w-screen-2xl pt-16 '
      ref={refMission}
    >
      <Box className='flex content-center justify-center pt-10'>
        <h1 className='m-4 text-center text-3xl font-bold dark:text-white md:text-5xl lg:text-6xl xl:text-5xl xl:leading-[4.5rem]'>
          MISION Y VISIÓN DEL PROYECTO
        </h1>
      </Box>
      <Box className='-mt-24 grid min-h-screen grid-cols-1 md:px-8 lg:grid-cols-2'>
        <Box className='flex items-center justify-center'>
          <Box className='hidden h-1/2 items-center justify-center lg:flex'>
            <img src='img/Mision.png' className='object-cover' />
          </Box>
        </Box>

        <Box className='flex content-center justify-center'>
          <Box className='flex items-center justify-center p-8 md:col-span-5 xl:p-16'>
            <Box className='flex flex-col gap-8'>
              <p className='text-dark-500 text-center text-xl leading-relaxed dark:text-gray-300 md:text-xl '>
                <span className='mb-2 text-center text-xl font-bold'>
                  MISIÓN:
                </span>
                <br />
                Presentar software que cumpla con las necesidades de los
                usuarios, al mismo tiempo de ser líderes en la figura para hacer
                negocios socialmente responsables.
              </p>
            </Box>
          </Box>
        </Box>

        <Box className='flex content-center justify-center'>
          <Box className='flex max-h-52 items-center justify-center p-8 md:col-span-5 xl:p-16'>
            <Box className='flex flex-col gap-8'>
              <p className='text-dark-500 text-center text-xl leading-relaxed dark:text-gray-300 md:text-xl '>
                <span className='mb-2 text-center text-xl font-bold'>
                  VISIÓN:
                </span>
                <br />
                Ofrecer software e innovar la forma en que aprendemos.
              </p>
            </Box>
          </Box>
        </Box>

        <Box className='max-w-sm overflow-hidden rounded px-8'>
          <Box className='hidden h-3/4 items-center justify-center lg:flex'>
            <img
              className='object-cover'
              src='img/Vision.png'
              alt='Sunset in the mountains'
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Mision;
