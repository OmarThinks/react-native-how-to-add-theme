import { useState } from "react";
import { Button, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

enum ThemeEnum {
  Light = "light",
  Dark = "dark",
}

const Level1 = () => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.Dark);

  const colors = theme === ThemeEnum.Dark ? darkColors : lightColors;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.bg }}
      edges={["top", "right", "left"]}
    >
      <View style={{ flex: 1, backgroundColor: colors.bg }}>
        <Text style={{ flex: 1, color: colors.text, fontSize: 40 }}>
          Step 1
        </Text>
      </View>

      <Button
        title="Light Theme"
        onPress={() => {
          setTheme(ThemeEnum.Light);
        }}
      />
      <Button
        title="Dark Theme"
        onPress={() => {
          setTheme(ThemeEnum.Dark);
        }}
      />
    </SafeAreaView>
  );
};

export default Level1;
