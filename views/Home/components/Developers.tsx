import Typed from 'typed.js';
import { FC, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const Developers: FC = () => {
  const el = useRef<any>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        'Astudillo Perez Edwin Uriel',
        'Freyre Valderrama Aarón',
        'Garcia Acosta Sergio Adrian',
        'Guzmán Gutierez Alan Joseph',
        'Jimenez García Cinthya Fernanda',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el?.current, options);

    return () => {
      typed?.current?.destroy();
    };
  }, []);

  return (
    <>
      <Box className='flex flex-col gap-8 md:flex-row md:items-center md:gap-20'>
        <Box>
          <p className='block font-mono '>
            Dessarolladores: <span ref={el}></span>
          </p>
        </Box>
      </Box>
    </>
  );
};
export default Developers;
