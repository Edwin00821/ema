import { IMEstudianteRes, IMAdminRes } from 'interfaces/Entities';
import { configureStore } from '@reduxjs/toolkit';
import { studentReducer, adminReducer, themeReducer } from './states';

export interface AppStore {
  student: IMEstudianteRes;
  admin: IMAdminRes;
  themeMode: boolean;
}

export default configureStore({
  reducer: {
    themeMode: themeReducer,
    student: studentReducer,
    admin: adminReducer,
  },
});
