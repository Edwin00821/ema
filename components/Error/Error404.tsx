import React, { FC } from 'react';

interface Props {
  error?: string;
  children?: React.ReactNode;
}

const Error404: FC<Props> = ({ error = 'Error 404', children }) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='grid grid-cols-2'>
        <div className='flex items-center justify-center'>
          <img src='/img/Error404.png' alt='error' />
        </div>
        <div className='flex h-full w-full flex-col items-center justify-center gap-10'>
          <p className='text-6xl font-bold text-secondary-light underline'>
            {error}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Error404;
