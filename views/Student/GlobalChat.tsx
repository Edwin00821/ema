import { useEffect, useState, useRef, FC } from 'react';

import { RiMessage2Line } from 'react-icons/ri';

import { nameFormat } from 'libs';

import {
  User,
  InfoGroup,
  SendMessageGlobal,
  Divider,
  MessageUser,
  SearchChats,
  Message,
} from 'views/Chat/components';
import { useAuth, useTimeAgo } from 'hooks';

import dayjs from 'dayjs';

import io from 'socket.io-client';

const socket = io(process.env.ENDPOINT_CHAT || 'http://localhost:8080');

interface chat {
  name: string;
  src: string;
  messages: React.ReactNode[];
  main: boolean;
  timeago?: string;
}

const time = new Date();
const n = time.toLocaleString('es', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});

const GlobalChat: FC = () => {
  const { studentState } = useAuth();

  const [timeago, setTimeago] = useState(+dayjs());

  const [oneRender, setOneRender] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);

  const [chats, setChats] = useState<chat[]>([]);

  const [userMessage, setUserMessage] = useState('');
  const [lastMessage, setLastMessage] = useState('');

  const now = useTimeAgo(timeago);

  const setMessageOtherUser = ({ name, src, messages, main }) => {
    const { nombre_per } = studentState.user.persona;
    const mainName = nameFormat(nombre_per);
    setOneRender(true);
    if (name !== mainName && !oneRender) {
      setLastMessage(messages[0]);
      setChats((prev) => [
        ...prev,
        {
          name,
          src,
          messages,
          main,
        },
      ]);
    }
  };

  const setMessage = ({ message, user }) => {
    console.log({ message, user });
  };

  useEffect(() => {
    if (userMessage !== '') {
      const { img_user } = studentState.user;
      const { nombre_per } = studentState.user.persona;
      const name = nameFormat(nombre_per);
      setLastMessage(userMessage);
      setUserMessage('');
      setChats((prev) => [
        ...prev,
        {
          name,
          src: studentState.user.img_user ?? '/img/user.png',
          messages: [userMessage],
          main: true,
        },
      ]);

      socket.emit('chat:global', {
        name,
        img: img_user ?? '/img/user.png',
        messaage: userMessage,
      });
      socket.on('chat:global', setMessageOtherUser);
      setOneRender(false);
    }

    return () => {
      socket.off('chat:mensaje', setMessageOtherUser);
    };
  }, [userMessage]);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  return (
    <main className='flex h-[90vh] grid-cols-1 bg-white dark:bg-[#22222A] lg:grid-cols-2'>
      <section className={` hidden transition-all md:block md:w-[25%] `}>
        <SearchChats />
        <div className='h-3/4 w-full overflow-y-scroll py-5 scrollbar-default scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:scrollbar-thumb-gray-700 md:pr-10 md:pl-6'>
          <User
            name='EMA'
            active={true}
            img='/img/logo3.png'
            lastMessage={''}
            isTyping={false}
            time={n}
            href='/student'
          />
          <h5 className='my-8 flex items-center gap-2 dark:text-gray-300'>
            <RiMessage2Line /> All messages
          </h5>
          <User
            name='Global Chat'
            active={true}
            img='/img/logo3.png'
            lastMessage={lastMessage}
            isTyping={false}
            time={n}
            href='/student/globalChat'
          />
        </div>
      </section>

      <section className='flex h-full w-[75%] flex-col bg-gray-50 dark:bg-[#1E1F24]'>
        <InfoGroup name='Global Chat' />

        <div className='h-full overflow-y-scroll py-5 px-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700 scrollbar-track-rounded-full scrollbar-thumb-rounded-full '>
          <Divider />
          {chats.map(({ name, src, messages, main, timeago }, index) => {
            return (
              <MessageUser
                name={name}
                src={src}
                key={index}
                main={main}
                timeago={now}
              >
                {messages.map((message, index) => (
                  <Message key={index} main={main}>
                    {message}
                  </Message>
                ))}
              </MessageUser>
            );
          })}
          <div ref={chatRef} />
        </div>
        <SendMessageGlobal
          setChats={setChats}
          setUserMessage={setUserMessage}
        />
      </section>
    </main>
  );
};

export default GlobalChat;
