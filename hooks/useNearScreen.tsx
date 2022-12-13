import { useState, useEffect, useRef } from 'react';

interface Props {
  distance?: string;
  externalRef?: React.MutableRefObject<any>;
  once?: boolean;
}

interface nearScreen {
  isNearScreen: boolean;
  fromRef: React.MutableRefObject<any>;
};

type useNearScreenType = (props: Props) => nearScreen;

const useNearScreen: useNearScreenType = ({
  distance,
  externalRef,
  once = true,
}) => {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();



  useEffect(() => {
    let observer: IntersectionObserver;
    const element = externalRef ? externalRef.current : fromRef.current;
    const height: number = externalRef ? (externalRef.current.clientHeight / 2) - 10 : 0;


    const onChange = (entries: any[], observer: IntersectionObserver): void => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : IntersectionObserver
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance ?? `-${height}px`,
      });

      if (element) observer.observe(element);

    }).catch(() => { });

    return () => observer?.disconnect();
  });
  return { isNearScreen, fromRef };
};

export default useNearScreen;
