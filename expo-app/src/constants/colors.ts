enum ThemeEnum {
  Light = "light",
  Dark = "dark",
}

type ThemeColorsType = {
  text: string;
  bg: string;
};

const lightColors: ThemeColorsType = {
  text: "black",
  bg: "white",
};

const darkColors: ThemeColorsType = {
  text: "white",
  bg: "black",
};

export { darkColors, lightColors, ThemeEnum };
export type { ThemeColorsType };
