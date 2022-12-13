import { useReducer } from 'react';
import { tableReducer, ContextPropsTable, TableContext } from './';
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

const initialState: ContextPropsTable = {
  dataTableEspecialidad: [],
  dataTableGenero: [],
  dataTableInteligencia: [],
  dataTableParcial: [],
  dataTableRol: [],
  dataTableSemestre: [],
  dataTableSubtema: [],
  dataTableTema: [],
  dataTableUaprendizaje: [],
  dataTableUser: [],
  dataTableSemEsp: [],
  dataTableAdmin: [],
  dataTableEstudiante: [],
  dataTableMaterial: [],
  dataTablePersona: [],
  rowId: '',
  setDataTableEspecialidad: (_dataTableEspecialidad: ICEspecialidad[]) => {},
  setDataTableGenero: (_dataTableGenero: ICGenero[]) => {},
  setDataTableInteligencia: (_dataTableInteligencia: ICInteligencia[]) => {},
  setDataTableParcial: (_dataTableParcial: ICParcial[]) => {},
  setDataTableRol: (_dataTableRol: ICRol[]) => {},
  setDataTableSemestre: (_dataTableSemestre: ICSemestre[]) => {},
  setDataTableSubtema: (_dataTableSubtema: ICSubtema[]) => {},
  setDataTableTema: (_dataTableTema: ICTema[]) => {},
  setDataTableUaprendizaje: (_dataTableUaprendizaje: ICUaprendizaje[]) => {},
  setDataTableUser: (_dataTableUser: IDUser[]) => {},
  setDataTableSemEsp: (_dataTableSemEsp: IESemEsp[]) => {},
  setDataTableAdmin: (_dataTableAdmin: IMAdmin[]) => {},
  setDataTableEstudiante: (_dataTableEstudiante: IMEstudiante[]) => {},
  setDataTableMaterial: (_dataTableMaterial: IMMaterial[]) => {},
  setDataTablePersona: (_dataTablePersona: IMPersona[]) => {},
  setRowId: (_rowId: string) => {},
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tableReducer, initialState);

  const setDataTableEspecialidad = (
    dataTableEspecialidad: ICEspecialidad[]
  ) => {
    dispatch({
      type: 'SET_DATA_TABLE_ESPECIALIDAD',
      payload: dataTableEspecialidad,
    });
  };

  const setDataTableGenero = (dataTableGenero: ICGenero[]) => {
    dispatch({
      type: 'SET_DATA_TABLE_GENERO',
      payload: dataTableGenero,
    });
  };

  const setDataTableInteligencia = (
    dataTableInteligencia: ICInteligencia[]
  ) => {
    dispatch({
      type: 'SET_DATA_TABLE_INTELIGENCIA',
      payload: dataTableInteligencia,
    });
  };

  const setDataTableParcial = (dataTableParcial: ICParcial[]) => {
    dispatch({
      type: 'SET_DATA_TABLE_PARCIAL',
      payload: dataTableParcial,
    });
  };

  const setDataTableRol = (dataTableRol: ICRol[]) => {
    dispatch({
      type: 'SET_DATA_TABLE_ROL',
      payload: dataTableRol,
    });
  };

  const setDataTableSemestre = (dataTableSemestre: ICSemestre[]) => {
    dispatch({
      type: 'SET_DATA_TABLE_SEMESTRE',
      payload: dataTableSemestre,
    });
  };

  const setDataTableSubtema = (dataTableSubtema: ICSubtema[]) => {
    dispatch({
      type: 'SET_DATA_TABLE_SUBTEMA',
      payload: dataTableSubtema,
    });
  };

  const setDataTableTema = (dataTableTema: ICTema[]) => {
    dispatch({
      type: 'SET_DATA_TABLE_TEMA',
      payload: dataTableTema,
    });
  };

  const setDataTableUaprendizaje = (
    dataTableUaprendizaje: ICUaprendizaje[]
  ) => {
    dispatch({
      type: 'SET_DATA_TABLE_UAPRENDIZAJE',
      payload: dataTableUaprendizaje,
    });
  };

  const setDataTableUser = (dataTableUser: IDUser[]) => {
    dispatch({
      type: 'SET_DATA_TABLE_USER',
      payload: dataTableUser,
    });
  };

  const setDataTableSemEsp = (dataTableSemEsp: IESemEsp[]) => {
    dispatch({
      type: 'SET_DATA_TABLE_SEMESP',
      payload: dataTableSemEsp,
    });
  };

  const setDataTableAdmin = (dataTableAdmin: IMAdmin[]) => {
    dispatch({
      type: 'SET_DATA_TABLE_ADMIN',
      payload: dataTableAdmin,
    });
  };

  const setDataTableEstudiante = (dataTableEstudiante: IMEstudiante[]) => {
    dispatch({
      type: 'SET_DATA_TABLE_ESTUDIANTE',
      payload: dataTableEstudiante,
    });
  };

  const setDataTableMaterial = (dataTableMaterial: IMMaterial[]) => {
    dispatch({
      type: 'SET_DATA_TABLE_MATERIAL',
      payload: dataTableMaterial,
    });
  };

  const setDataTablePersona = (dataTablePersona: IMPersona[]) => {
    dispatch({
      type: 'SET_DATA_TABLE_PERSONA',
      payload: dataTablePersona,
    });
  };

  const setRowId = (rowId: string | number) => {
    dispatch({ type: 'SET_ROW_ID', payload: rowId });
  };
  return (
    <TableContext.Provider
      value={{
        ...state,
        setDataTableEspecialidad,
        setDataTableGenero,
        setDataTableInteligencia,
        setDataTableParcial,
        setDataTableRol,
        setDataTableSemestre,
        setDataTableSubtema,
        setDataTableTema,
        setDataTableUaprendizaje,
        setDataTableUser,
        setDataTableSemEsp,
        setDataTableAdmin,
        setDataTableEstudiante,
        setDataTableMaterial,
        setDataTablePersona,
        setRowId,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default ContextProvider;
