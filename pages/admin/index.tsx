import { useAuth } from 'hooks';
import { getUserSession } from 'libs/getUserSession';
import { getSession } from 'next-auth/react';
import type { GetServerSideProps, NextPage } from 'next';
import { AdminHome } from 'views/Admin';
import { IMAdminRes } from 'interfaces/Entities';
interface Props {
  user: IMAdminRes;
}

const App: NextPage<Props> = ({ user }) => {
  useAuth(user);
  return <AdminHome />;
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
