import { Host, Switch } from "@expo/ui";
import { useState } from "react";
import { Text, View } from "react-native";
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
      <View style={{ alignSelf: "stretch", flex: 1, padding: 16 }}>
        <View style={{ flex: 1, backgroundColor: colors.bg }}>
          <Text style={{ flex: 1, color: colors.text, fontSize: 40 }}>
            Level 1
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            alignSelf: "stretch",
            flexDirection: "row",
            gap: 16,
          }}
        >
          <Host matchContents>
            <Switch
              value={theme === ThemeEnum.Dark}
              onValueChange={(newValue) => {
                setTheme(newValue === true ? ThemeEnum.Dark : ThemeEnum.Light);
              }}
            />
          </Host>
          <Text style={{ color: colors.text, fontSize: 44 }}>
            {theme === ThemeEnum.Light ? "Light Theme" : "Dark Theme"}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Level1;
