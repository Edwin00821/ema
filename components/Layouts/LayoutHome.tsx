import { useEffect, useState, FC } from 'react';
import { Header } from 'components/Header';
import Head from 'next/head';
import { NavHome } from 'libs/menuNav';
import { useHomeContext } from 'views/Home/hooks';

interface Props {
  title: string;
  description: string;
  isHome?: boolean;
  children: React.ReactNode;
}
const LayoutHome: FC<Props> = ({ title, description, isHome, children }) => {
  const {
    isInicioNearScreen,
    isMissionNearScreen,
    isObjectivesNearScreen,
    isPhilosophyNearScreen,
  } = useHomeContext();
  const [navs, SetNavs] = useState<any[]>([]);

  useEffect(() => {
    SetNavs(
      NavHome.map((nav) => {
        if (nav.href === '#home') return { ...nav, active: isInicioNearScreen };

        if (nav.href === '#filosofia')
          return { ...nav, active: isPhilosophyNearScreen };
        if (nav.href === '#mision')
          return { ...nav, active: isMissionNearScreen };

        if (nav.href === '#objetivos')
          return { ...nav, active: isObjectivesNearScreen };

        return nav;
      })
    );
  }, [
    isInicioNearScreen,
    isPhilosophyNearScreen,
    isMissionNearScreen,
    isObjectivesNearScreen,
  ]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='og:title' content={description} />
        <meta name='og:description' content={description} />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Header navs={navs} fixed />
      <main>{children}</main>
    </>
  );
};

export default LayoutHome;
