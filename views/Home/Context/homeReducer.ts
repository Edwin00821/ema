import { ContextPropsHome } from './';

type HomeActionType =
  | { type: 'SET_IS_INICIO_NEAR_SCREEN'; payload: boolean }
  | { type: 'SET_IS_PHILOSOPHY_NEAR_SCREEN'; payload: boolean }
  | { type: 'SET_IS_MISSION_NEAR_SCREEN'; payload: boolean }
  | { type: 'SET_IS_OBJECTIVES_NEAR_SCREEN'; payload: boolean };

export const homeReducer = (
  state: ContextPropsHome,
  action: HomeActionType
) => {
  switch (action.type) {
    case 'SET_IS_INICIO_NEAR_SCREEN':
      return {
        ...state,
        isInicioNearScreen: action.payload,
      };
    case 'SET_IS_PHILOSOPHY_NEAR_SCREEN':
      return {
        ...state,
        isPhilosophyNearScreen: action.payload,
      };
    case 'SET_IS_MISSION_NEAR_SCREEN':
      return {
        ...state,
        isMissionNearScreen: action.payload,
      };
    case 'SET_IS_OBJECTIVES_NEAR_SCREEN':
      return {
        ...state,
        isObjectivesNearScreen: action.payload,
      };
    default:
      return state;
  }
};
