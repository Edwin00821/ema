import { createContext } from 'react';

export interface ContextPropsHome {
  isInicioNearScreen: boolean;
  isPhilosophyNearScreen: boolean;
  isMissionNearScreen: boolean;
  isObjectivesNearScreen: boolean;

  setIsInicioNearScreen: (isInicioNearScreen: boolean) => void;
  setIsPhilosophyNearScreen: (isPhilosophyNearScreen: boolean) => void;
  setIsMissionNearScreen: (isMissionNearScreen: boolean) => void;
  setIsObjectivesNearScreen: (isObjectivesNearScreen: boolean) => void;
}

export const HomeContext = createContext({} as ContextPropsHome);