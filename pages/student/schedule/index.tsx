import { LayoutStudent } from 'components/Layouts';
import StudentSchedulePage from 'views/Student/StudentSchedulePage';

import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { getUserSession } from 'libs/getUserSession';
import { useAuth } from 'hooks';
import { IMEstudianteRes } from 'interfaces/Entities';

interface Props {
  user: IMEstudianteRes;
}
const App: NextPage<Props> = ({ user }) => {
  useAuth(user);
  return (
    <LayoutStudent title='Horario' description='Horario'>
      <StudentSchedulePage />
    </LayoutStudent>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const user = getUserSession(session);
  if (session && user.user.rol.id_rol === 2) {
    return {
      props: { user },
    };
  }
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export default App;
