import { RootState } from "@/redux/store";
import {
  ThemeEnum,
  updateThemeAndPersist,
} from "@/redux/themeSlice/themeSlice";
import { useColors } from "@/redux/themeSlice/useColors";
import { Host, Switch } from "@expo/ui";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

const Level3 = () => {
  const colors = useColors();

  const dispatch = useDispatch();
  const theme = useSelector<RootState>((state) => state.themeSlice.value);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.bg }}
      edges={["top", "right", "left"]}
    >
      <View style={{ alignSelf: "stretch", flex: 1, padding: 16 }}>
        <View style={{ flex: 1, backgroundColor: colors.bg }}>
          <Text style={{ flex: 1, color: colors.text, fontSize: 40 }}>
            Level 3
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
                dispatch(
                  updateThemeAndPersist(
                    newValue ? ThemeEnum.Dark : ThemeEnum.Light,
                  ),
                );
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

export default Level3;
