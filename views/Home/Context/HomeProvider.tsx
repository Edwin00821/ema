import { useReducer } from 'react';
import { homeReducer, HomeContext, ContextPropsHome } from './';

export const initialState = {
  isInicioNearScreen: false,
  isPhilosophyNearScreen: false,
  isMissionNearScreen: false,
  isObjectivesNearScreen: false,
  setIsInicioNearScreen: (_isInicioNearScreen: boolean) => {},
  setIsPhilosophyNearScreen: (_isPhilosophyNearScreen: boolean) => {},
  setIsMissionNearScreen: (_isMissionNearScreen: boolean) => {},
  setIsObjectivesNearScreen: (_isObjectivesNearScreen: boolean) => {},
};

interface Props {
  children: React.ReactNode;
}

export const HomeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(homeReducer, initialState);

  const setIsInicioNearScreen = (isInicioNearScreen: boolean) => {
    dispatch({
      type: 'SET_IS_INICIO_NEAR_SCREEN',
      payload: isInicioNearScreen,
    });
  };

  const setIsPhilosophyNearScreen = (isPhilosophyNearScreen: boolean) => {
    dispatch({
      type: 'SET_IS_PHILOSOPHY_NEAR_SCREEN',
      payload: isPhilosophyNearScreen,
    });
  };

  const setIsMissionNearScreen = (isMissionNearScreen: boolean) => {
    dispatch({
      type: 'SET_IS_MISSION_NEAR_SCREEN',
      payload: isMissionNearScreen,
    });
  };

  const setIsObjectivesNearScreen = (isObjectivesNearScreen: boolean) => {
    dispatch({
      type: 'SET_IS_OBJECTIVES_NEAR_SCREEN',
      payload: isObjectivesNearScreen,
    });
  };

  return (
    <HomeContext.Provider
      value={
        {
          ...state,
          setIsInicioNearScreen,
          setIsPhilosophyNearScreen,
          setIsMissionNearScreen,
          setIsObjectivesNearScreen,
        } as ContextPropsHome
      }
    >
      {children}
    </HomeContext.Provider>
  );
};
