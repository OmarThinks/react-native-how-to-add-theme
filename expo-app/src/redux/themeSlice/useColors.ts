import { useSelector } from "react-redux";
import { RootState, store } from "../store";
import { ThemeEnum } from "./themeSlice";

type ThemeColors = {
  text: string;
  bg: string;
};

const lightColors: ThemeColors = {
  text: "black",
  bg: "white",
};

const darkColors: ThemeColors = {
  text: "white",
  bg: "black",
};

const useColors = () => {
  const theme = useSelector<RootState>((state) => state.themeSlice.value);

  const colors = theme === ThemeEnum.Dark ? darkColors : lightColors;

  return colors;
};

export { useColors };
