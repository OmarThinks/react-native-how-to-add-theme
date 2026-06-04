import { darkColors, lightColors, ThemeEnum } from "@/constants/colors";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const useColors = () => {
  const theme = useSelector<RootState>((state) => state.themeSlice.value);

  const colors = theme === ThemeEnum.Dark ? darkColors : lightColors;

  return colors;
};

export { useColors };
