import { FC, useEffect } from 'react';
import { LayoutHome } from 'components/Layouts';
import {
  Banner,
  Philosophy,
  Mision,
  Objectives,
  Footer,
} from 'views/Home/components';
import { HomeProvider } from './Context';

const Home: FC = () => {
  
// useEffect( () => {console.log(window.history);}, [] )

  return (
    <>
    <HomeProvider>

        <LayoutHome
          title='EMA'
          description='EMA es una empresa desarrollada por alumnos del Cecyt9 para ayudar a los estudaintes con su aprendizaje escolar'
          isHome
          >
        <main
        className='relative min-h-screen bg-primary-light py-8 px-12 dark:bg-tertiary '
        id={'home'}
        >


          <Banner />
          <Philosophy />
          <Mision />
          <Objectives />

        </main>
        <Footer />
        </LayoutHome>
    </HomeProvider>
    </>
  );
};

export default Home;
