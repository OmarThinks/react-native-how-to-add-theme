import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeysEnum } from "@/storage/StorageKeysEnum";

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
      const theme = action.payload;
      state.value = theme;
    },
    updateThemeAndPersist: (state, action: PayloadAction<ThemeEnum>) => {
      const theme = action.payload;
      state.value = theme;
      AsyncStorage.setItem(StorageKeysEnum.Theme, theme);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTheme, updateThemeAndPersist } = themeSlice.actions;
export { ThemeEnum };
export default themeSlice.reducer;
