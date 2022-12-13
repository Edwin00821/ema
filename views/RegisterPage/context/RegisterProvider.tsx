import { useReducer } from 'react';
import { registerReducer } from './';
import { ICGenero, ICSemestre, ICEspecialidad } from 'interfaces/Entities';
import { IPersonalData, IRegisterStudent } from 'interfaces/Auth';

export const initialState = {
  dataGenero: [
    { id_gen: 0, tipo_gen: 'No se encontraron generos', valida_gen: 1 },
  ],
  dataSemestre: [
    { id_sem: 0, tipo_sem: 'No se encontraron semestres', valida_sem: 1 },
  ],
  dataEspecialidad: [
    { id_es: 0, nombre_es: 'No se encontraron especialidades', valida_es: 1 },
  ],
  personalData: null,
  academicData: null,
  indexActive: 1,
  setGenero: (_genero: ICGenero[]) => {},
  setSemestre: (_semestre: ICSemestre[]) => {},
  setEspecialidad: (_especialidad: ICEspecialidad[]) => {},
  setPersonalData: (_personalData: IPersonalData) => {},
  setAcademicData: (_academicData: IRegisterStudent) => {},
  setIndexActive: (_index: number) => {},
};

export const RegisterProvider = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);

  const setGenero = (genero: ICGenero[]): void => {
    dispatch({ type: 'SET_DATA_GENERO', payload: genero });
  };

  const setSemestre = (semestre: ICSemestre[]): void => {
    dispatch({ type: 'SET_DATA_SEMESTRE', payload: semestre });
  };

  const setEspecialidad = (especialidad: ICEspecialidad[]): void => {
    dispatch({ type: 'SET_DATA_ESPECIALIDAD', payload: especialidad });
  };

  const setPersonalData = (personalData: IPersonalData): void => {
    dispatch({ type: 'SET_PERSONAL_DATA', payload: personalData });
  };

  const setAcademicData = (academicData: IRegisterStudent): void => {
    dispatch({ type: 'SET_ACADEMIC_DATA', payload: academicData });
  };

  const setIndexActive = (index: number): void => {
    dispatch({ type: 'SET_INDEX_ACTIVE', payload: index });
  };

  return {
    ...state,
    setGenero,
    setSemestre,
    setEspecialidad,
    setPersonalData,
    setAcademicData,
    setIndexActive,
  };
};
