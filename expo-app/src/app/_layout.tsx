import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import { AnimatedSplashOverlay } from "@/components/animated-icon";
import AppTabs from "@/components/app-tabs";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/redux/store";
import { useEffect, useEffectEvent } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeysEnum } from "@/storage/StorageKeysEnum";
import { updateTheme } from "@/redux/themeSlice/themeSlice";
import { ThemeEnum } from "@/constants/colors";

export default function TabLayout() {
  return (
    <Provider store={store}>
      <AppInsideRedux />
    </Provider>
  );
}

const AppInsideRedux = () => {
  const theme = useSelector<RootState>((state) => state.themeSlice.value);
  const dispatch = useDispatch();
  const initializeTheme = useEffectEvent(async () => {
    const theme = (await AsyncStorage.getItem(
      StorageKeysEnum.Theme,
    )) as ThemeEnum | null;
    if (theme) {
      dispatch(updateTheme(theme));
    }
  });

  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <ThemeProvider value={theme === ThemeEnum.Dark ? DarkTheme : DefaultTheme}>
      <StatusBar
        barStyle={theme === ThemeEnum.Dark ? "light-content" : "dark-content"}
      />
      <AnimatedSplashOverlay />
      <AppTabs />
    </ThemeProvider>
  );
};

/*
      <StatusBar
        barStyle={theme === ThemeEnum.Dark ? "light-content" : "dark-content"}
      />

*/
