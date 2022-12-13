import { Fragment, FC } from 'react';
import { Transition, Menu } from '@headlessui/react';
import { useAuth } from 'hooks';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Profile: FC = () => {
  const { studentState, adminState } = useAuth();

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button className='inline-flex w-full justify-center text-sm font-medium text-gray-700 '>
        <img
          className='h-12 w-12 rounded-full'
          src='/img/user.png'
          alt='user photo'
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-tertiary'>
          <div className='py-1'>
            <span className='text-md block px-4 py-1 text-gray-900 dark:text-gray-100'>
              {studentState.user.persona.nombre_per ||
                adminState.user.persona.nombre_per}
            </span>
            <span className='block border-b-2 border-gray-300 px-4 pb-2  text-sm text-gray-600 dark:text-gray-500'>
              {studentState.user.correo_user || adminState.user.correo_user}
            </span>

            <Menu.Item>
              {({ active }) => {
                return (
                  <div>
                    <Link
                      href={`${
                        studentState
                          ? '/student/profile'
                          : '/admin/profile'
                      }`}
                    >
                      <a
                        className={classNames(
                          active
                            ? 'bg-blue-300 text-gray-900 dark:text-gray-100'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Mi Cuenta
                      </a>
                    </Link>
                  </div>
                );
              }}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={async () => await signOut()}
                  className={classNames(
                    active
                      ? 'bg-red-300 text-gray-900 dark:text-gray-100'
                      : 'text-gray-700',
                    'flex w-full items-start px-4 py-2 text-sm'
                  )}
                >
                  Cerrar Sesión
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Profile;
