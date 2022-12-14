import { LayoutStudent } from 'components/Layouts';
import { EditProfile } from 'views/EditProfile';

import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { getUserSession } from 'libs/getUserSession';
import { useAuth } from 'hooks';
import { ICGenero, IMAdminRes } from 'interfaces/Entities';
import { GeneroService } from 'services';
interface Props {
  user: IMAdminRes;
  dataGenero: ICGenero[];
}
const App: NextPage<Props> = ({ user, dataGenero }) => {
  useAuth(user);
  return (
    <LayoutStudent title='Profile' description='Profile of Student '>
      <EditProfile dataGenero={dataGenero} />
    </LayoutStudent>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const user = getUserSession(session);
  if (session && user.user.rol.id_rol === 1) {
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
