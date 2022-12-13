import React from 'react';
interface Props {
  title: string;
}
const TextHeader = ({ title }: Props) => {
  return (
    <p className='flex items-center justify-center p-5 text-xl font-bold'>
      {title}
    </p>
  );
};

export default TextHeader;
