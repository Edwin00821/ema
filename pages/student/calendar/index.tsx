import { getUserSession } from 'libs/getUserSession';
import { getSession } from 'next-auth/react';
import { useAuth } from 'hooks';

import type { GetServerSideProps, NextPage } from 'next';
import { IMEstudianteRes } from 'interfaces/Entities';

import { LayoutStudent } from 'components/Layouts';
import Iframe from 'react-iframe';
import axios from 'axios';

interface Props {
  user: IMEstudianteRes;
  endpoint: string;
}

const App: NextPage<Props> = ({ user, endpoint }) => {
  const { studentState } = useAuth(user);

  return (
    <LayoutStudent title='Calendario' description='Calendario'>
      <Iframe
        url={`${endpoint}${'?' + studentState?.user.correo_user ?? 'auth/'}`}
        className='h-[89vh] w-full'
      />
    </LayoutStudent>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const student = getUserSession(session);
  try {
    if (session && student.user.rol.id_rol === 2) {
      return {
        props: { student },
      };
    }
    await axios.get(
      `${process.env.ENDPOINT_CALENDAR}${student?.user.correo_user ?? 'auth/'}`
    );
  } catch (e) {
    console.log(e);
  }
  return {
    props: { user: student, endpoint: process.env.ENDPOINT_CALENDAR },
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export default App;
