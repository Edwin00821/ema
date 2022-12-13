import React, { useState, FC } from 'react';

import { RiCloseLine, RiMenu3Fill } from 'react-icons/ri';

const SideBarInformation: FC = ()=> {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = (): void => {
    setSidebar(!sidebar);
  };

  return (
    <div className='fixed top-0 -left-full z-50 flex h-[89vh] w-[40%] flex-col justify-between border-r bg-white p-8  transition-all md:w-[40%] lg:static lg:w-full'>
      <div
        className={`fixed top-0 z-50 w-[80%] bg-white transition-all md:w-[40%] lg:static lg:w-full ${
          sidebar ? 'left-0' : '-left-full'
        } col-span-1 h-full p-8`}
      >
        {/* Logotipo */}
        <div className='my-12 text-center'>
          <h1 className='text-lg font-bold uppercase tracking-[4px]'>
            Introduccion a React
          </h1>
        </div>
        <div className='flex h-[60vh] flex-col justify-between'>
          {/* Menu */}
          <nav>
            <ul>
              <li>
                <a
                  href='#'
                  className='flex items-center gap-4 rounded-lg p-4 text-base font-semibold text-gray-400 transition-colors hover:bg-secondary-light hover:text-white'
                >
                  ¿Que es React?
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center gap-4 rounded-lg p-4 text-base font-semibold text-gray-400 transition-colors hover:bg-secondary-light hover:text-white'
                >
                  Caracteristicas Principales
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center gap-4 rounded-lg p-4 text-base font-semibold text-gray-400 transition-colors hover:bg-secondary-light hover:text-white'
                >
                  ¿Como Funciona?
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center gap-4 rounded-lg p-4 text-base font-semibold text-gray-400 transition-colors hover:bg-secondary-light hover:text-white'
                >
                  Introduccion a Componentes
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <button
        onClick={handleSidebar}
        className='fixed bottom-4 right-4 z-40 block rounded-full bg-secondary-light p-2 text-2xl text-white lg:hidden'
      >
        {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </div>
  );
};

export default SideBarInformation;
