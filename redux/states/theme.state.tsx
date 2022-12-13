import { createSlice } from '@reduxjs/toolkit';

interface IMTheme {
  theme: boolean;
}

export const ThemeEmptyState = {
  theme: false,
};

interface ActionTheme {
  payload: boolean;
  type: string;
}

export const themetSlice = createSlice({
  name: 'theme',
  initialState: ThemeEmptyState,
  reducers: {
    // setThemeMode: (state, action: ActionTheme) => ( state = action.payload),
    setThemeMode: (state, action: ActionTheme) => ({
      ...state,
      theme: action.payload,
    }),
  },
});

export const { setThemeMode } = themetSlice.actions;

export default themetSlice.reducer;
