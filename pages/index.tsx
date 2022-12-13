import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { UserT } from 'typings';
import { Home } from 'views/Home';

const App: NextPage = () => <Home />;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  let destination = '/';
  const session = await getSession({ req });

  if (session) {
    const user = session.user as UserT;

    const { data, isNewUser } = user;

    if (isNewUser) destination = '/register';
    if (!isNewUser && data?.user?.rol?.id_rol === 1) destination = '/admin';
    if (!isNewUser && data?.user?.rol?.id_rol === 2) destination = '/student';

    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default App;
