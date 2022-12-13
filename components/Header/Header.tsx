import { FC } from 'react';
import Link from 'next/link';

import { HamburguerMenu, ListOfNavs, Profile } from './';

import { useAuth, useScrolled } from 'hooks';

import type { Navs } from 'typings';

import { Box } from '@mui/material';
import { Logo } from 'components/Logo';

interface Props {
  navs: Navs[];
  bgDefault?: string;
  bgisntScrolled?: string;
  fixed?: boolean;
}
const Header: FC<Props> = ({
  navs,
  bgDefault = 'bg-primary-light dark:bg-tertiary',
  bgisntScrolled = 'bg-primary-light dark:bg-tertiary',
  fixed = false,
}) => {
  const { isScrolled } = useScrolled();
  const { isLogued } = useAuth();

  return (
    <header
      className={`  items-center justify-between ${
        fixed ? 'fixed' : ''
      } ${bgisntScrolled} ${
        isScrolled
          ? 'fixed bg-primary-dark backdrop-blur-sm dark:bg-tertiary-dark'
          : 'flex'
      }`}
    >
      <Logo />
      <nav className='hidden w-6/12 items-center justify-center gap-8 font-medium text-gray-500 dark:text-gray-300 lg:flex'>
        <ListOfNavs navs={navs} />
      </nav>
      <>
        <Box className='hidden items-center justify-center gap-8 lg:flex'>
          {isLogued ? (
            <Profile />
          ) : (
            <>
              <Link href={'/register'}>
                <a className='rounded-lg border border-gray-300 py-2 px-4 hover:border-secondary hover:text-secondary '>
                  Registrate
                </a>
              </Link>
              <Link href={'/login'}>
                <a
                  type='button'
                  className='rounded-lg border border-gray-300 py-2 px-4 hover:border-secondary hover:text-secondary '
                >
                  Iniciar Sesion
                </a>
              </Link>
            </>
          )}
        </Box>
        <Box className='flex w-6/12 justify-end text-white lg:hidden'>
          <HamburguerMenu />
        </Box>
      </>
    </header>
  );
};

export default Header;
