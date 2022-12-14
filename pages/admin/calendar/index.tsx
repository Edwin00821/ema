import { getUserSession } from 'libs/getUserSession';
import { getSession } from 'next-auth/react';
import { useAuth } from 'hooks';

import type { GetServerSideProps, NextPage } from 'next';
import { IMAdminRes } from 'interfaces/Entities';

import { LayoutStudent } from 'components/Layouts';
import Iframe from 'react-iframe';
import axios from 'axios';

interface Props {
  user: IMAdminRes;
  endpoint: string;
}

const App: NextPage<Props> = ({ user, endpoint }) => {
  const { adminState } = useAuth(user);

  return (
    <LayoutStudent title='Calendario' description='Calendario'>
      <Iframe
        url={`${endpoint}${'?' + adminState?.user.correo_user ?? 'auth/'}`}
        className='h-[89vh] w-full'
      />
    </LayoutStudent>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const admin = getUserSession(session);
  try {
    if (session && admin.user.rol.id_rol === 2) {
      return {
        props: { admin },
      };
    }
    await axios.get(
      `${process.env.ENDPOINT_CALENDAR}${admin?.user.correo_user ?? 'auth/'}`
    );
  } catch (e) {
    console.log(e);
  }
  return {
    props: { user: admin, endpoint: process.env.ENDPOINT_CALENDAR },
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export default App;
