import Link from 'next/link';
import { SlGraduation } from 'react-icons/sl';
import SwitchThemeMode from './SwitchThemeMode';
import { FC } from 'react';
import Box from '@mui/material/Box';

const Logo: FC = () => {
  return (
    <Box className='flex items-center gap-5'>
      <Link href='/'>
        <a className='flex items-center gap-2'>
          <SlGraduation size={50} className={'text-secondary'} />
          <h1 className='text-3xl font-bold  dark:text-white'>EMA</h1>
        </a>
      </Link>
      <SwitchThemeMode />
    </Box>
  );
};

export default Logo;
