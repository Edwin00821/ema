import { createContext } from 'react';
interface schedule {
  col: number;
  row: number;
  active: boolean;
  uAprendizaje: string;
  teacher: string;
  build: string;
  classroom: string;
  hour_start: string;
  hour_end: string;
}
export interface ContextPropsSchedule {
  monday: schedule[];
  tuesday: schedule[];
  wednesday: schedule[];
  thursday: schedule[];
  friday: schedule[];
}

export const ScheduleContext = createContext({} as ContextPropsSchedule);
