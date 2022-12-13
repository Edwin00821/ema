import { ContextPropsTable } from './';
import {
  ICEspecialidad,
  ICGenero,
  ICInteligencia,
  ICParcial,
  ICRol,
  ICSemestre,
  ICSubtema,
  ICTema,
  ICUaprendizaje,
  IDUser,
  IESemEsp,
  IMAdmin,
  IMEstudiante,
  IMMaterial,
  IMPersona,
} from 'interfaces/Entities';

type TableActionType =
  | { type: 'SET_DATA_TABLE_ESPECIALIDAD'; payload: ICEspecialidad[] }
  | { type: 'SET_DATA_TABLE_GENERO'; payload: ICGenero[] }
  | { type: 'SET_DATA_TABLE_INTELIGENCIA'; payload: ICInteligencia[] }
  | { type: 'SET_DATA_TABLE_PARCIAL'; payload: ICParcial[] }
  | { type: 'SET_DATA_TABLE_ROL'; payload: ICRol[] }
  | { type: 'SET_DATA_TABLE_SEMESTRE'; payload: ICSemestre[] }
  | { type: 'SET_DATA_TABLE_SUBTEMA'; payload: ICSubtema[] }
  | { type: 'SET_DATA_TABLE_TEMA'; payload: ICTema[] }
  | { type: 'SET_DATA_TABLE_UAPRENDIZAJE'; payload: ICUaprendizaje[] }
  | { type: 'SET_DATA_TABLE_USER'; payload: IDUser[] }
  | { type: 'SET_DATA_TABLE_SEMESP'; payload: IESemEsp[] }
  | { type: 'SET_DATA_TABLE_ADMIN'; payload: IMAdmin[] }
  | { type: 'SET_DATA_TABLE_ESTUDIANTE'; payload: IMEstudiante[] }
  | { type: 'SET_DATA_TABLE_MATERIAL'; payload: IMMaterial[] }
  | { type: 'SET_DATA_TABLE_PERSONA'; payload: IMPersona[] }
  | { type: 'SET_ROW_ID'; payload: string | number };

export const tableReducer = (
  state: ContextPropsTable,
  action: TableActionType
) => {
  switch (action.type) {
    case 'SET_DATA_TABLE_ESPECIALIDAD':
      return {
        ...state,
        dataTableEspecialidad: action.payload,
      };
    case 'SET_DATA_TABLE_GENERO':
      return {
        ...state,
        dataTableGenero: action.payload,
      };
    case 'SET_DATA_TABLE_INTELIGENCIA':
      return {
        ...state,
        dataTableInteligencia: action.payload,
      };
    case 'SET_DATA_TABLE_PARCIAL':
      return {
        ...state,
        dataTableParcial: action.payload,
      };
    case 'SET_DATA_TABLE_ROL':
      return {
        ...state,
        dataTableRol: action.payload,
      };
    case 'SET_DATA_TABLE_SEMESTRE':
      return {
        ...state,
        dataTableSemestre: action.payload,
      };
    case 'SET_DATA_TABLE_SUBTEMA':
      return {
        ...state,
        dataTableSubtema: action.payload,
      };
    case 'SET_DATA_TABLE_TEMA':
      return {
        ...state,
        dataTableTema: action.payload,
      };
    case 'SET_DATA_TABLE_UAPRENDIZAJE':
      return {
        ...state,
        dataTableUaprendizaje: action.payload,
      };
    case 'SET_DATA_TABLE_USER':
      return {
        ...state,
        dataTableUser: action.payload,
      };
    case 'SET_DATA_TABLE_SEMESP':
      return {
        ...state,
        dataTableSemEsp: action.payload,
      };
    case 'SET_DATA_TABLE_ADMIN':
      return {
        ...state,
        dataTableAdmin: action.payload,
      };
    case 'SET_DATA_TABLE_ESTUDIANTE':
      return {
        ...state,
        dataTableEstudiante: action.payload,
      };
    case 'SET_DATA_TABLE_MATERIAL':
      return {
        ...state,
        dataTableMaterial: action.payload,
      };
    case 'SET_DATA_TABLE_PERSONA':
      return {
        ...state,
        dataTablePersona: action.payload,
      };
    case 'SET_ROW_ID':
      return {
        ...state,
        rowId: action.payload,
      };
    default:
      return state;
  }
};
