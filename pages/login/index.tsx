import { IMAdminRes, IMEstudianteRes } from 'interfaces/Entities';
import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { UserT } from 'typings';

import { LoginPage, LoginLayout } from 'views/LoginPage';

const App: NextPage = () => {
  return (
    <LoginLayout title='Login' description='Login EMA'>
      <LoginPage />
    </LoginLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  let destination = '/';
  const session = await getSession({ req });

  if (session) {
    const { user } = session;
    const { data, isNewUser } = user as UserT;

    if (isNewUser) destination = '/register';
    if (!isNewUser && data?.user?.rol?.id_rol === 1) destination = '/admin';
    if (!isNewUser && data?.user?.rol?.id_rol === 2) destination = '/student';

    return {
      redirect: {
        destination,
        permanent: false,
      },
      props: {},
    };
  }
  return {
    props: {},
  };
};

export default App;
