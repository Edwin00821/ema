import { IMEstudianteRes } from 'interfaces/Entities';
import { createSlice } from '@reduxjs/toolkit';

export const StudentEmptyState: IMEstudianteRes = {
  isLogued: false,
  boleta_est: '',
  user: {
    img_user: '/img/user.png',
    correo_user: '',
    rol: {
      id_rol: null,
      tipo_rol: '',
      valida_rol: 1,
    },
    persona: {
      id_per: null,
      nombre_per: '',
      appat_per: '',
      apmat_per: '',
      fecha_de_nacimiento_per: '',
      genero: {
        id_gen: null,
        tipo_gen: '',
        valida_gen: 1,
      },
      inteligencia: {
        id_int: null,
        tipo_int: '',
        valida_int: 1,
      },
      valida_per: 1,
    },
    valida_user: 1,
  },
  especialidad: {
    id_es: null,
    nombre_es: '',
    valida_es: 1,
  },
  semestre: {
    id_sem: null,
    tipo_sem: '',
    valida_sem: 1,
  },
  valida_est: 1,
};

interface ActionStudent {
  payload: IMEstudianteRes;
  type: string;
}

export const studentSlice = createSlice({
  name: 'student',
  initialState: StudentEmptyState,
  reducers: {
    createStudent: (state, action: ActionStudent) => (state = action.payload),
    updeteStudent: (state, action: ActionStudent) => ({
      ...state,
      ...action.payload,
    }),
    deleteStudent: (state) => (state = StudentEmptyState),
  },
});

export const { createStudent, updeteStudent, deleteStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
