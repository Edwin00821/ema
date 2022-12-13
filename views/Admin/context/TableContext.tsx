import { createContext } from 'react';

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

export interface ContextPropsTable {
  dataTableEspecialidad: ICEspecialidad[];
  dataTableGenero: ICGenero[];
  dataTableInteligencia: ICInteligencia[];
  dataTableParcial: ICParcial[];
  dataTableRol: ICRol[];
  dataTableSemestre: ICSemestre[];
  dataTableSubtema: ICSubtema[];
  dataTableTema: ICTema[];
  dataTableUaprendizaje: ICUaprendizaje[];
  dataTableUser: IDUser[];
  dataTableSemEsp: IESemEsp[];
  dataTableAdmin: IMAdmin[];
  dataTableEstudiante: IMEstudiante[];
  dataTableMaterial: IMMaterial[];
  dataTablePersona: IMPersona[];

  rowId: string | number;

  setDataTableEspecialidad: (dataTableEspecialidad: ICEspecialidad[]) => void;
  setDataTableGenero: (dataTableGenero: ICGenero[]) => void;
  setDataTableInteligencia: (dataTableInteligencia: ICInteligencia[]) => void;
  setDataTableParcial: (dataTableParcial: ICParcial[]) => void;
  setDataTableRol: (dataTableRol: ICRol[]) => void;
  setDataTableSemestre: (dataTableSemestre: ICSemestre[]) => void;
  setDataTableSubtema: (dataTableSubtema: ICSubtema[]) => void;
  setDataTableTema: (dataTableTema: ICTema[]) => void;
  setDataTableUaprendizaje: (dataTableUaprendizaje: ICUaprendizaje[]) => void;
  setDataTableUser: (dataTableUser: IDUser[]) => void;
  setDataTableSemEsp: (dataTableSemEsp: IESemEsp[]) => void;
  setDataTableAdmin: (dataTableAdmin: IMAdmin[]) => void;
  setDataTableEstudiante: (dataTableEstudiante: IMEstudiante[]) => void;
  setDataTableMaterial: (dataTableMaterial: IMMaterial[]) => void;
  setDataTablePersona: (dataTablePersona: IMPersona[]) => void;

  setRowId: (rowId: string | number) => void;
}

export const TableContext = createContext({} as ContextPropsTable);
