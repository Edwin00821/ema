import { useState, FC } from 'react'; // import state
const HamburguerMenu: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className='flex items-center justify-between border-gray-400 py-8 '>
      <nav>
        <section className='flex lg:hidden'>
          <div
            className='HAMBURGER-ICON space-y-2'
            onClick={() => setIsNavOpen(!isNavOpen)} // toggle isNavOpen state on click
          >
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          </div>

          <div
            className={
              isNavOpen
                ? 'absolute text-black top-0 right-0 flex h-screen w-full flex-col items-center justify-evenly bg-primary-light dark:bg-tertiary dark:text-white'
                : 'hidden'
            }
          >
            {' '}
            BIENVENIDO A EMA
            <div
              className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <ul className='MENU-LINK-MOBILE-OPEN flex min-h-[250px] flex-col items-center justify-between'>
              <button className='bg-hover:black;'>
                <li className='my-8 border-b border-gray-400 uppercase '>
                  <a href='/register'>Regístrate</a>
                </li>
              </button>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <a href='/login'>Iniciar Sesión</a>
              </li>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <a href='/#home'>Inicio</a>
              </li>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <a href='/#filosofia'>Filosofía y Propósitos</a>
              </li>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <a href='/#mision'>Misión y Visión</a>
              </li>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <a href='/#Objectives&Values'>Objetivos y valores</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className=' hidden space-x-8 lg:flex'>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default HamburguerMenu;
