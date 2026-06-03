import { ThemeEnum, updateTheme } from "@/redux/themeSlice/themeSlice";
import { useColors } from "@/redux/themeSlice/useColors";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

const Level3 = () => {
  const colors = useColors();

  const dispatch = useDispatch();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.bg }}
      edges={["top", "right", "left"]}
    >
      <View style={{ flex: 1, backgroundColor: colors.bg }}>
        <Text style={{ flex: 1, color: colors.text, fontSize: 40 }}>
          Level 2
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

export default Level3;
