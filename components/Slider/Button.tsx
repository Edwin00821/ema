import React, {FC} from 'react';

interface Props {
  right?: boolean;
  children: React.ReactNode;
}

const Button: FC<Props> = ({ right, children }) => {
  return (
    <button
      className={` pointer-events-auto absolute flex h-full w-[2rem] cursor-pointer border-none bg-none text-center outline-none hover:fill-white hover:opacity-20 ${
        right
          ? 'right-0  items-center justify-end'
          : 'left-0 flex items-center '
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
