import Image from 'next/image';

interface Props {
  name: string;
  src: string;
  main?: boolean;
  timeago?: string;
  children: React.ReactNode;
}

const MessageUser = ({ name, src, main, timeago, children }: Props) => {
  return (
    <div className={`flex ${main && 'justify-end'} w-full gap-4`}>
      {/* <Image
        src={src}
        layout='fixed'
        width={40}
        height={40}
        alt='User Image Chat'
        className={`${main && ''} order-1 rounded-full object-cover`}
      /> */}

      <img
        src={src}
        className={`${main && 'order-1 '} h-10 w-10 rounded-full object-cover`}
      />

      <div className='w-1/2'>
        <h4
          className={`mb-2 font-semibold ${
            main && 'text-right'
          } dark:text-gray-300`}
        >
          {!main && name}
          <span
            className={`${
              main ? 'mr-8' : 'ml-8 '
            } text-sm font-normal text-gray-500`}
          >
            {timeago}
          </span>
          {main && name}
        </h4>
        {children}
      </div>
    </div>
  );
};

export default MessageUser;
