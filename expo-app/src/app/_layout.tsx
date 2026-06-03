import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import { AnimatedSplashOverlay } from "@/components/animated-icon";
import AppTabs from "@/components/app-tabs";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "@/redux/store";
import { ThemeEnum } from "@/redux/themeSlice/themeSlice";

export default function TabLayout() {
  return (
    <Provider store={store}>
      <AppInsideRedux />
    </Provider>
  );
}

const AppInsideRedux = () => {
  const theme = useSelector<RootState>((state) => state.themeSlice.value);

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
