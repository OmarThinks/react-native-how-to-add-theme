import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

enum ThemeEnum {
  Light = "light",
  Dark = "dark",
}

export interface ThemeState {
  value: ThemeEnum;
}

const initialState: ThemeState = {
  value: ThemeEnum.Dark,
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<ThemeEnum>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTheme } = themeSlice.actions;
export { ThemeEnum };
export default themeSlice.reducer;
