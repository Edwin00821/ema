import React, { FC } from 'react';
const month = new Date().toLocaleDateString('en-us', {
  month: 'long',
  day: 'numeric',
});
const Divider: FC = () => {
  return (
    <div className='relative my-8'>
      <p className='absolute -top-[14px] ml-[50%] -translate-x-[50%] bg-white py-1 px-4 text-center text-sm dark:bg-[#1E1F24] dark:text-gray-600'>
        Today, {month}
      </p>
      <hr className='dark:border-gray-600' />
    </div>
  );
};

export default Divider;
