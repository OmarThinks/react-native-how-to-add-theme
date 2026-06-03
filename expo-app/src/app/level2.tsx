import { RootState } from "@/redux/store";
import { ThemeEnum, updateTheme } from "@/redux/themeSlice/themeSlice";
import { useColors } from "@/redux/themeSlice/useColors";
import { Button, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

const Level2 = () => {
  const colors = useColors();

  const dispatch = useDispatch();

  const theme = useSelector<RootState>((state) => state.themeSlice.value);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.bg }}
      edges={["top", "right", "left"]}
    >
      <StatusBar
        barStyle={theme === ThemeEnum.Dark ? "light-content" : "dark-content"}
      />
      <View style={{ flex: 1, backgroundColor: colors.bg }}>
        <Text style={{ flex: 1, color: colors.text, fontSize: 40 }}>
          Step 1
        </Text>
      </View>

      <Button
        title="Light Theme"
        onPress={() => {
          dispatch(updateTheme({ theme: ThemeEnum.Light }));
        }}
      />
      <Button
        title="Dark Theme"
        onPress={() => {
          dispatch(updateTheme({ theme: ThemeEnum.Dark }));
        }}
      />
    </SafeAreaView>
  );
};

export default Level2;
