import { IMAdminRes } from 'interfaces/Entities';
import { createSlice } from '@reduxjs/toolkit';

export const AdminEmptyState: IMAdminRes = {
  isLogued: false,
  num_empleado: '',
  user: {
    correo_user: '',
    img_user: '/imng/user.png',
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
  valida_adm: 1,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState: AdminEmptyState,
  reducers: {
    createAdmin: (state, action) => (state = action.payload),
    updeteAdmin: (state, action) => ({ ...state, ...action.payload }),
    deleteAdmin: (state) => (state = AdminEmptyState),
  },
});

export const { createAdmin, updeteAdmin, deleteAdmin } = adminSlice.actions;

export default adminSlice.reducer;
